import { BadRequestException, Controller, Get, UseFilters } from "@nestjs/common";
import { ExceptionWalaFilter } from "./exceptionwala.exception.filter";


//agar exception filter ko chahe toh humm poorey controller prr bhi laga sakte hai ya fir 
//sirf method pei lagana chahe toh waha bhi laga sakte hai

@Controller('exceptionwala')
export class ExceptionWalaController{
     //builtin exception and custom exceptions bhi hotey it you want to learn them you can
    //exception-filter->provide us the full control over the exception

    @Get('/exception')
    //exception filter asey use karte hai
    @UseFilters(ExceptionWalaFilter)
    helloExceptionapi():string{
        throw new BadRequestException({
            status:509,
            error:'this is my custom exception'
        });
        return 'this is exception api';
    }
}