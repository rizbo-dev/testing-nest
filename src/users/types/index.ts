import { Exclude, Expose } from 'class-transformer';

export interface User {
  username: string;
  password: string;
}

export const GROUP_USERNAME = 'group_username';
export const GROUP_PASSWORD = 'group_password';
export const GROUP_ALL = 'group_all';

export class SerializedUser {
  @Expose({ groups: [GROUP_ALL, GROUP_USERNAME] })
  username: string;

  @Expose({ groups: [GROUP_ALL, GROUP_PASSWORD] })
  password: string;

  constructor(partial: Partial<SerializedUser>) {
    Object.assign(this, partial);
  }
}
