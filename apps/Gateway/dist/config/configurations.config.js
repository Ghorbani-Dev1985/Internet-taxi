"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configurations = void 0;
const config_1 = require("@nestjs/config");
const AppConfig = (0, config_1.registerAs)('App', () => ({
    version: 'v1',
    port: 3001,
}));
const SwaggerConfig = (0, config_1.registerAs)('Swagger', () => ({
    title: 'internet-taxi',
    description: 'This is online transporter application',
    version: '1.0.0',
}));
exports.configurations = [AppConfig, SwaggerConfig];
//# sourceMappingURL=configurations.config.js.map