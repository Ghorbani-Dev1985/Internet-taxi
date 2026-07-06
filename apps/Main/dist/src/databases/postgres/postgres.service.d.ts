import { OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
export declare class PostgresService implements OnModuleInit {
    private readonly configService;
    connection: Sequelize;
    constructor(configService: ConfigService);
    onModuleInit(): Promise<void>;
}
