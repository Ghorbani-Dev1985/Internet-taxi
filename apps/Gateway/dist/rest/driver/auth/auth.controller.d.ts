import { DriverAuthService } from './auth.service';
import { DriverRequestOtpInputDto } from "../../../dtos/driver.dto";
export declare class DriverAuthController {
    private readonly driverAuthService;
    constructor(driverAuthService: DriverAuthService);
    requestOtp(body: DriverRequestOtpInputDto): Promise<any>;
}
