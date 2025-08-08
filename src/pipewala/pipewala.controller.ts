import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, ValidationPipe } from "@nestjs/common";
import { PipeWalaDto } from "./dto/pipewala.dto";
// import { PipeWala } from "./pipes/pipewala.pipe";
@Controller('pipes')
export class PipeWalaController{
    @Get('/findAll')
    findAllPipewala():string{
        return 'this is find all heros';
    }

    @Post('/addPipe')
    createPipewala():string{
        return 'this is creating hero';
    }

    @Get('/:id')
    findPipeById(@Param("id",ParseBoolPipe) id:number) :string{
        console.log(id,typeof(id));
        //toh agar hum without parseIntPipe aayenge toh it will show ki vo ek string hai but we want result in number so 
        //so for that we use parseIntPipe after using parseIntPipe it will show number or voi hamey chahiye
        //and it we send /abc then it will show validation failed
        //ParseBoolPipe-> boolean expected hai -> true or false
        return 'this is pipe by id';
    }

    //now lets discuss custompipes
    //hamm custom pipe na create karke built in pipe bhi use kar sakte hai

    @Post('/add')
    addPipehumai(@Body(new ValidationPipe()) pipewala: PipeWalaDto):string{
        return 'this is returning pipehumai';
    }

    
}