import { Module } from "@nestjs/common";
import { PassportLocalStrategy } from "./passport.local.stratgy";
import { AuthenticationwalaModule } from "src/authenticationwala/authenticationwala.module";
import { AuthController } from "./auth.controller";
import { JwtStrategy } from "./jwt.stratgy";


@Module({
    imports:[AuthenticationwalaModule,
        
    ],
    controllers:[AuthController],
    providers:[PassportLocalStrategy,JwtStrategy]
})
export class authModule{
    constructor(){
        return 'this is auth module class'
    }
}