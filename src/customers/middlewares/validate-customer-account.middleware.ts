import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateCustomerAccountMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { valid } = req.headers;
    console.log('validating cust acc');
    if (valid) {
      next();
    } else {
      res.status(HttpStatus.UNAUTHORIZED).send({ error: 'Not valid acc' });
    }
  }
}
