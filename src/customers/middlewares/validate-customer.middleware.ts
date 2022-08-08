import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Hello from middleware');
    const { authorization } = req.headers;
    if (!authorization) {
      return res
        .status(HttpStatus.FORBIDDEN)
        .send({ error: 'No authorization headers' });
    }
    next();
  }
}
