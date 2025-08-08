import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { Request } from "express";
@Injectable()
export class interceptorwalaInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any>{


        const ctx = context.switchToHttp();
        const request = ctx.getRequest<Request>();

        request.body = {
            ...request.body,
            name: "this is the name",
            age:45 // Adding/modifying the name property
        };
        //but baat yei hai ki request ke sath toh hum middleware mei chedkhani karte hai but in interceptor (response ke sath bhi karr saskte hai)
        //console.log('hello from interceptors')
        //yaha hamey next controller tak pahuchana hai so for that we have to write next.handle()
        return next.handle();
    }

}