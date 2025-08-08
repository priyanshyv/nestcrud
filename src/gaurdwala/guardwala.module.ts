import { Module } from "@nestjs/common";
import { GuardwalaController } from "./guardwala.controller";

@Module({
    imports:[],
    controllers:[GuardwalaController],
    providers:[]
})
export class GuardwalaModule{
    constructor(){
        console.log('hello from guard wala module');
    }
}