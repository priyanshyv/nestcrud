import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction,Request,Response } from "express";

@Injectable()
export class HeroMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        //jab bhi hamarey server pei request aayegi toh hamey ek log nazar aayega ki kaha sey request aai or kaha jaayegi
        // console.log('this is class based middleware for hero module');
        let protocol = req.protocol; //http or https
        let host = req.get('host'); //local host
        let url = req.originalUrl;
        let method = req.method;
        let date = new Date().toDateString();

        console.log(protocol+'://' + host + url +' '+ method+ '  '+ date);
        next();
    }

}
//ab yei middleware bananey ke baad hamey isey register bhi karna hoga
//we will do that in module