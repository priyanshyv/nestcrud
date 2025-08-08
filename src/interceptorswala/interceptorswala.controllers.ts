import { Controller, Get, Req, Res, UseInterceptors } from "@nestjs/common";
import { interceptorwalaInterceptor } from "./interceptorswala.interceptor";
import type { Request, Response } from "express";

@Controller('interceptorwala')
export class InterceptorswalaController {
    @Get()
    @UseInterceptors(interceptorwalaInterceptor)
    hellofromInterceptor(@Req() req: Request, @Res() res: Response): any {
        return res.json(req.body);
    }
}