import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  private users = [
    {
      id: 1,
      email: 'boris@boris.ddcom',
      createdAt: new Date(),
    },
    {
      id: 2,
      email: 'kovaj@kovddaj.com',
      createdAt: new Date(),
    },
    {
      id: 3,
      email: 'cesh@cesh.com',
      createdAt: new Date(),
    },
    {
      id: 4,
      email: 'zika@zika.com',
      createdAt: new Date(),
    },
  ];

  findCustomerById(id: number) {
    const user = this.users.find((item) => item.id === id);

    return user;
  }
}
