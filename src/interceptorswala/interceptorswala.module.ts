import { Module } from "@nestjs/common";
import { InterceptorswalaController } from "./interceptorswala.controllers";

@Module({
    imports:[],
    controllers:[InterceptorswalaController],
    providers:[]
})
export class InterceptorswalaModule{
    constructor(){
        return 'This is interceptor file'
    }
}