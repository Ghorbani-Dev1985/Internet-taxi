import { RedisService } from "../src/databases/redis/redis.service";
export declare class DriversService {
    private readonly redis;
    private static readonly role;
    constructor(redis: RedisService);
    requestOtp({ phone }: {
        phone: string;
    }): Promise<{
        success: boolean;
        otp: string;
        phone: string;
        expiresIn: number;
    }>;
}
