import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  SerializeOptions,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { UserNotFoundException } from 'src/users/exceptions/UserNotFound.exception';
import { HttpExceptionFilter } from 'src/users/filters/HttpException.filter';
import { UsersService } from 'src/users/services/users/users.service';
import { GROUP_ALL, GROUP_PASSWORD, SerializedUser } from 'src/users/types';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}

  @Get('')
  getUsers() {
    return this.userService.getUsers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ groups: [GROUP_PASSWORD] })
  @Get('/username/:username')
  getByUserName(@Param('username') username: string) {
    const user = this.userService.getUserByUsername(username);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return new SerializedUser(user);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseFilters(HttpExceptionFilter)
  @SerializeOptions({ groups: [GROUP_ALL] })
  @Get('id/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    const user = this.userService.getUserById(id);
    if (user) {
      return new SerializedUser(user);
    }
    throw new UserNotFoundException('Custom message', HttpStatus.CONFLICT);
  }
}
