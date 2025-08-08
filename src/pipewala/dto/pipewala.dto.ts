import { IsNumber, IsString } from "class-validator";

//dto hamm class bhi bana saktey hai if we want then usey interface bhi bana sakte hai
export class PipeWalaDto{
    @IsNumber()
    id:number;
    @IsString()
    name:string;
    
}