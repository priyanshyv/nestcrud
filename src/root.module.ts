// app.module.ts
import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'priyanshyadav',
      password: 'S5',
      database: 'book_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true, // Add this for debug
    }),BookModule
    // ... other
  ],
})
export class RootModule implements OnApplicationBootstrap {
  constructor(private connection: Connection) {}

  async onApplicationBootstrap() {
    console.log('root running');
  
  }
}
