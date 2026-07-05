import { DriverSignUpInputDto } from "../../../dtos/driver.dto";
import { MainServiceClient } from "../../../services/main.service";
export declare class DriverAuthService {
    private readonly mainSerCli;
    constructor(mainSerCli: MainServiceClient);
    signUp(body: DriverSignUpInputDto): Promise<any>;
}
