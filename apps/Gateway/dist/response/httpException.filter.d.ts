import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
import { ServiceClientOutputDto } from "../services/dto";
export declare function throwHttpErr(errorData: ServiceClientOutputDto<any>): void;
export declare function handleSrvCliResponse(data: ServiceClientOutputDto<any>): any;
export declare class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
