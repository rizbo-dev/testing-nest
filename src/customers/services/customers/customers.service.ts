import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private users: Customer[] = [
    {
      id: 1,
      email: 'boris@boris.ddcom',
      name: 'boris',
    },
    {
      id: 2,
      email: 'kovaj@kovddaj.com',
      name: 'kovaj',
    },
    {
      id: 3,
      email: 'cesh@cesh.com',
      name: 'cesh',
    },
    {
      id: 4,
      email: 'zika@zika.com',
      name: 'zika',
    },
  ];

  findCustomerById(id: number) {
    const user = this.users.find((item) => item.id === id);

    return user;
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.users.push(customerDto);
  }

  getCustomers() {
    return this.users;
  }
}
