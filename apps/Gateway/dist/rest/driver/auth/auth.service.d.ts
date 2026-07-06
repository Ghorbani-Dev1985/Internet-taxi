import { DriverRequestOtpInputDto } from "../../../dtos/driver.dto";
import { MainServiceClient } from "../../../services/main.service";
export declare class DriverAuthService {
    private readonly mainSerCli;
    constructor(mainSerCli: MainServiceClient);
    requestOtp(body: DriverRequestOtpInputDto): Promise<any>;
}
