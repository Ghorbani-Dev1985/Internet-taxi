"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configurations = void 0;
const config_1 = require("@nestjs/config");
const DatabaseConfig = (0, config_1.registerAs)('Database', () => ({
    username: 'postgres',
    password: '9636540011dvf',
    database: 'internet-taxi',
    host: 'localhost',
    port: '5432',
    dialect: 'postgres'
}));
const RedisConfig = (0, config_1.registerAs)('Redis', () => ({
    host: 'localhost',
    port: '6379',
    cacheDb: 10,
    sessionDb: 11
}));
exports.configurations = [DatabaseConfig, RedisConfig];
//# sourceMappingURL=configurations.config.js.map