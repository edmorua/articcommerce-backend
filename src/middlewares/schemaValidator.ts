import { Request, Response, NextFunction } from 'express';
import Ajv, { ErrorObject } from 'ajv';
import addFormats from 'ajv-formats';
import { CODES_RESPONSE } from '../utils/constants/response.code';


function validateSchema(schema: object) {
    const ajv = new Ajv({ formats: { date: true, time: true } });
    addFormats(ajv);

    return (req: Request, res: Response, next: NextFunction) => {
        const validate = ajv.compile(schema);
        const valid = validate(req.body);
        if (!valid) {
            const errors = validate.errors as ErrorObject[];
            return res.status(CODES_RESPONSE.BAD_REQUEST).json({ errors });
        }
        next();
    };
}

export default validateSchema;
