import { Request, Response, NextFunction } from "express";
import Ajv, { ErrorObject } from "ajv";
import addFormats from 'ajv-formats';


function validateSchema(schema: object) {
    const ajv = new Ajv({formats: { date: true, time: true }});
    addFormats(ajv);

    return (req: Request, res: Response, next: NextFunction) => {
        const validate = ajv.compile(schema);
        const valid = validate(req.body);
        if (!valid) {
            const errors = validate.errors as ErrorObject[];
            return res.status(400).json({ errors });
        }
        next();
    };
};

export default validateSchema;
