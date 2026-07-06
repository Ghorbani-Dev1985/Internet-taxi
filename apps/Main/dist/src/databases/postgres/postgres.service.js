"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_typescript_1 = require("sequelize-typescript");
let PostgresService = class PostgresService {
    configService;
    connection;
    constructor(configService) {
        this.configService = configService;
    }
    async onModuleInit() {
        try {
            console.log('Trying to connect to database with config');
            const dbConfig = this.configService.get('Database');
            this.connection = new sequelize_typescript_1.Sequelize({
                dialect: dbConfig.dialect,
                host: dbConfig.host,
                port: dbConfig.port,
                username: dbConfig.username,
                password: dbConfig.password,
                database: dbConfig.database,
                logging: false,
            });
            await this.connection.authenticate();
            console.log('Connected to postgresql successfully');
        }
        catch (e) {
            console.log('Failed to connect to postgreSQL', e);
            process.exit(1);
        }
    }
};
exports.PostgresService = PostgresService;
exports.PostgresService = PostgresService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], PostgresService);
//# sourceMappingURL=postgres.service.js.map