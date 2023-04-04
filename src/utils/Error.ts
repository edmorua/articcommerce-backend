import express from 'express';

export class ErrorResponse extends Error {
  statusCode = 500;

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
    return res.status(error.statusCode).json({ message: error.message });
  }
  return res.status(500).json({message: error?.message || 'internal server error' })
}