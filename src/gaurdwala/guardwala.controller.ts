import { Controller, Get, UseGuards } from "@nestjs/common";
import { GuardwalaGuard } from "./guardwala.guard";


//hum guard ko kisi bhi controller pei laga sakte hai ya fir
//ya kisi method pei bhi laga sakte hai
@Controller('guardwala')
//this will apply the guard on the whole controller
@UseGuards(new GuardwalaGuard())
export class GuardwalaController{
    @Get('')
    //@UseGuards(new GuardwalaGuard())
    hellofromGuard():string{
        return 'hello from guard controller'
    }

    //yei jo guard hai vo sirf hellofromGuard() mei implement hora hai 
    //but if want to apply that on the whole controller then directly export class GuardwalaController ke upper define karde 
    //and also we can apply the guard throughout the application too main.ts mei -> app.useGlobalGuards(new GuardWalaGurad())
}