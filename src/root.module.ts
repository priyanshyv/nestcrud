// app.module.ts
import { Module, OnApplicationBootstrap } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Connection } from 'typeorm';
//import { BookModule } from './book/book.module';
// import { HeroModule } from './hero/hero.module';
import { PipeModule } from './pipewala/pipewala.module';
import { ExceptionWalaModule } from './exceptionwala/exceptionwala.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'priyanshyadav',
    //   password: 'S5',
    //   database: 'book_db',
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   synchronize: true,
    //   logging: true, 
    // }),BookModule
    //HeroModule
    //PipeModule
    ExceptionWalaModule
    // ... other
  ],
})
export class RootModule implements OnApplicationBootstrap {
  //constructor(private connection: Connection) {}

  async onApplicationBootstrap() {
    console.log('root running');
  
  }
}
