import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'boris',
      password: 'boris',
    },
    {
      id: 2,
      username: 'kovaj',
      password: 'kovaj',
    },
    {
      id: 3,
      username: 'cesh',
      password: 'cesh',
    },
    {
      id: 4,
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

  getUserById(id: number) {
    return this.users.find((item) => item.id === id);
  }
}
