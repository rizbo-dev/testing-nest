import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @Column()
  username: string;

  @Column({
    name: 'email_address',
    nullable: false,
    default: 'def@def.com',
  })
  emailAddress: string;

  @Column()
  password: string;
}
