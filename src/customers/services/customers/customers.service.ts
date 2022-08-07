import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  findCustomer() {
    return {
      id: 1,
      email: 'boris@boris.com',
      created: new Date(),
    };
  }
}