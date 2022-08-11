import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersModule } from './customers/customers.module';
import entities from './typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    CustomersModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      username: 'admin',
      password: 'admin12345',
      database: 'testing-nest',
      entities,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
