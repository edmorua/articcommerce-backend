/* eslint-disable no-magic-numbers */
import path from 'path';
import fs from 'fs';
import ts from 'typescript';
import * as TJS from 'typescript-json-schema';

console.log(__dirname);
const settings = {
  required: true,
  ref: true,
};
const compilerOptions = {
  strictNullChecks: true,
};

const dirPath = path.resolve(__dirname, 'interfaces');
const outputDir = path.resolve(__dirname, 'schemas');
const fileNames = fs.readdirSync(dirPath).filter(fileName => fileName.endsWith('.ts'));
const program = ts
  .createProgram(fileNames.map(fileName => path.join(dirPath, fileName)),compilerOptions);

for (const sourceFile of program.getSourceFiles()) {
  if (!sourceFile.isDeclarationFile) {
    ts.forEachChild(sourceFile, node => {
      if (ts.isInterfaceDeclaration(node)) {
        const interfaceName = node.name.text;
        const schema = TJS.generateSchema(program, interfaceName, settings);
        const schemaFileName = `${interfaceName}.json`;
        const schemaFilePath = path.join(outputDir, schemaFileName);
        fs.writeFileSync(schemaFilePath, JSON.stringify(schema, null, 2));
      }
    });
  }
}
