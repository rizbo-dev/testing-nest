import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'boris',
      password: 'boris',
    },
    {
      username: 'kovaj',
      password: 'kovaj',
    },
    {
      username: 'cesh',
      password: 'cesh',
    },
    {
      username: 'moki',
      password: 'moki',
    },
  ];

  getUsers() {
    return this.users.map((user) => plainToClass(SerializedUser, user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
