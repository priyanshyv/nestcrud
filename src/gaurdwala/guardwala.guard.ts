import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";
@Injectable()
export class GuardwalaGuard implements CanActivate{

    public key:string = "THISISKEY";

    canActivate(context: ExecutionContext): boolean {
        const ctx = context.switchToHttp();
        const request = ctx.getRequest<Request>();
        console.log('this is inside the guard');

        if(request.header("key") == undefined) return false;
        return request.header("key")==this.key;
    }
    //yei boolean | Promise<boolean> | Observable<boolean> mei sey kisi ko bhi return kar sakta hai
    // canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    //     throw new Error("Method not implemented.");
    // }

}