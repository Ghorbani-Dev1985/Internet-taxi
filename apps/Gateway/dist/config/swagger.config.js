"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = setupSwagger;
const swagger_1 = require("@nestjs/swagger");
const admin_module_1 = require("../rest/admin/admin.module");
const driver_module_1 = require("../rest/driver/driver.module");
const passenger_module_1 = require("../rest/passenger/passenger.module");
function setupSwagger(app, configService) {
    const apiVersion = configService.get('App.version');
    const swaggerTitle = configService.get('Swagger.title');
    const swaggerDescription = configService.get('Swagger.description');
    const swaggerVersion = configService.get('Swagger.version');
    const swaggerOptions = new swagger_1.DocumentBuilder()
        .setTitle(swaggerTitle)
        .setDescription(swaggerDescription)
        .setVersion(swaggerVersion)
        .build();
    const mainDocument = swagger_1.SwaggerModule.createDocument(app, swaggerOptions);
    swagger_1.SwaggerModule.setup(`${apiVersion}/docs`, app, mainDocument);
    const modules = [
        { path: 'admin', module: admin_module_1.AdminModule },
        { path: 'driver', module: driver_module_1.DriverModule },
        { path: 'passenger', module: passenger_module_1.PassengerModule },
    ];
    modules.forEach(({ path, module }) => {
        const doc = swagger_1.SwaggerModule.createDocument(app, swaggerOptions, {
            include: [module],
        });
        swagger_1.SwaggerModule.setup(`${apiVersion}/docs/${path}`, app, doc);
    });
}
//# sourceMappingURL=swagger.config.js.map