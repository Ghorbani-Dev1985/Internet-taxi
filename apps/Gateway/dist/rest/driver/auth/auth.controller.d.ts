import { DriverAuthService } from './auth.service';
import { DriverSignUpInputDto } from "../../../dtos/driver.dto";
export declare class DriverAuthController {
    private readonly driverAuthService;
    constructor(driverAuthService: DriverAuthService);
    signUp(body: DriverSignUpInputDto): Promise<any>;
}
