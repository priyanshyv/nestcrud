import { Module } from "@nestjs/common";
import { AuthenticationwalaService } from "./authenticationwala.service";

@Module({
    imports:[],
    controllers:[],
    //or yaha toh hamm isliye likhte hai coz we want to link the service with it
    providers:[AuthenticationwalaService],
    //aauth module mei bhi laana hai (authenticationwala.service) or jaha bhi use kara chahe waha use kar sakte hai
    //so for that we have to do
    exports:[AuthenticationwalaService]

})
export class AuthenticationwalaModule{
    constructor(){
        return 'this is authenticaion module';
    }
}