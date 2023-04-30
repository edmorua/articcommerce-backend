import express from 'express';
import { CODES_RESPONSE } from './constants/response.code';
import Logger from './logger';

export class ErrorResponse extends Error {
  statusCode = CODES_RESPONSE.INTERNAL_ERROR;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;

    Object.setPrototypeOf(this, ErrorResponse.prototype);
  }

  getErrorCode() {
    return this.statusCode;
  }

  getErrorMessage() {
    return this.message;
  }
}

export function reportError(error: any, res: express.Response) {
  if (error instanceof ErrorResponse) {
    Logger.error(`Error: ${error.statusCode} - ${error.message}`);
    return res.status(error.statusCode).json({ message: error.message });
  }
  Logger.error(`Error: ${CODES_RESPONSE.INTERNAL_ERROR} - ${error.message}`);
  return res
    .status(CODES_RESPONSE.INTERNAL_ERROR)
    .json({ message: error?.message || 'internal server error' });
}
