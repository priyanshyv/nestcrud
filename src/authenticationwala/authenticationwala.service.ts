import { Injectable } from "@nestjs/common";
import { Authenticationwala } from "./authenticationwala.entity";

@Injectable()
export class AuthenticationwalaService{
    public users : Authenticationwala[] = [
        {
            username:'User1',
            password:'hello',
            email:'user1@gmail.com'
        },
        {
            username:'User2',
            password:'hello',
            email:'user2@gmail.com'
        },
        {
            username:'User3',
            password:'hello',
            email:'user3@gmail.com'
        },
    ];

    //yaha service mei ham apna method likhenge jo

    getUserByName(userName:string): Authenticationwala | undefined{
        return this.users.find((user)=>user.username==userName)
    }

    //ab iss service ko nikaal ke hamey auth module mei bhi laana hai 
}