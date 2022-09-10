import { ArgumentsHost, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';

export class AllExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();

        const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
        const message = exception instanceof HttpException ? exception.getResponse() : exception;

        response.status(status).json({
            timeStamp: new Date().toISOString(),
            path: request.url,
            error: message,
        });
    }
}
