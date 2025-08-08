import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request, Response } from "express"; // Use Express types for Request/Response
//yaha jo decorator ke parameter ke ander paas karenge vo yei batayega ki hum ismey kis tarah ka exception pass karenge
@Catch(HttpException)
export class ExceptionWalaFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    //ArgumentsHost sey ham context extract karenge 
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      host: request.get("host"),
      message: exception.message || "Internal server error", // Include exception message
    });
  }
}

