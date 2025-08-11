import { Injectable } from "@nestjs/common";
import { Authenticationwala } from "./authenticationwala.entity";
import { JwtService } from "@nestjs/jwt";
import { CONSTANTS } from "src/constants";

@Injectable()
export class AuthenticationwalaService{
    constructor(private readonly jwtService : JwtService){
    };
    public users : Authenticationwala[] = [
        {
            username:'User1',
            password:'hello',
            email:'user1@gmail.com',
            role:CONSTANTS.ROLES.ANDRIOD_DEVELOPER,
        },
        {
            username:'User2',
            password:'hello',
            email:'user2@gmail.com',
            role:CONSTANTS.ROLES.WEB_DEVELOPER
        },
        {
            username:'User3',
            password:'hello',
            email:'user3@gmail.com',
            role:CONSTANTS.ROLES.DATA_ANA
        },
    ];

    
    //yaha service mei ham apna method likhenge jo

    getUserByName(userName:string): Authenticationwala | undefined{
        return this.users.find((user)=>user.username==userName)
    }


    //id card
    generateToken(payload:Authenticationwala):string{
        //sign method for generating jwtToken
        return this.jwtService.sign(payload);
    }

    //ab iss service ko nikaal ke hamey auth module mei bhi laana hai 
}