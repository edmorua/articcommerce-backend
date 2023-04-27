import express from 'express';
import jwt from 'jsonwebtoken';
import { reportError } from '../utils/Error';


export const authValidator = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const secret = process.env.SECRET_KEY || '';
    const payload = jwt.verify(token, secret);
    console.log({payload});
    next();
  } catch (error) {
    return reportError(error, res);
  }
}