import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import { NextFunction } from 'express';

//agar koi bhi global middleware hai toh hamm usey yaha define karenge
//and also note that hamey functional based approach hi follow karni hoti hai 
//yaha class based approach kaam nahi karti

function globalMiddlewareOne(req:Request, res:Response, next:NextFunction){
  console.log('this is our middleware 1');
  next();
}
function globalMiddlewareTwo(req:Request, res:Response, next:NextFunction){
  console.log('this is our middleware 2');
  next();
}

async function bootstrap() {
  //yei jo nestFeactory hai isney saari abstraction hide kardi hai
  const app = await NestFactory.create(RootModule);
  //if we want to apply gurad global guard
  //app.useGlobalGuards(new GuardWalaGurad())
  app.use(globalMiddlewareOne,globalMiddlewareTwo);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
