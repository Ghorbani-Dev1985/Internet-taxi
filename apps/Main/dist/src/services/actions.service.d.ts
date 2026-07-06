import { ServiceClientActionInputDto, ServiceResponseData } from './dto';
import { DriversService } from "../../providers/driver.service";
export declare class SelfActionService {
    private readonly driversService;
    constructor(driversService: DriversService);
    findAndCall(data: ServiceClientActionInputDto): Promise<ServiceResponseData>;
}
