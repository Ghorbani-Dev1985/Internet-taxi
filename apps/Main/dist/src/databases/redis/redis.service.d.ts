import { OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';
export declare class RedisService implements OnModuleInit {
    private configService;
    constructor(configService: ConfigService);
    private logger;
    cacheCli: Redis;
    sessionCli: Redis;
    onModuleInit(): Promise<void>;
}
