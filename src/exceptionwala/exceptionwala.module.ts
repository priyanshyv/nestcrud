import { Module } from "@nestjs/common";
import { ExceptionWalaController } from "./exceptionwala.controller";

@Module({
    imports: [],
  controllers: [ExceptionWalaController],
  providers: [],
})
export class ExceptionWalaModule{
    constructor(){
        console.log('hello this is exception wala module');
    }
}