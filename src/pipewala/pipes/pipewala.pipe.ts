// import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
// import { plainToClass, plainToInstance } from "class-transformer";
// import { PipeWalaDto } from "../dto/pipewala.dto";
// import { validate } from "class-validator";

// export class PipeWala implements PipeTransform{
//     async transform(value: any, metadata: ArgumentMetadata):Promise<any> {
//         console.log(value,typeof(value)); 
//         const pipeClass = plainToClass(PipeWalaDto,value);
//         console.log(pipeClass,typeof(pipeClass)); 
//         const errorhumai = await validate(pipeClass);
//         if(errorhumai.length>0){
//             console.log(errorhumai);
//         }
//         return value;
        
//     }

// }