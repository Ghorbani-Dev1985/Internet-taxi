import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AdminModule } from '../rest/admin/admin.module';
import { DriverModule } from '../rest/driver/driver.module';
import { PassengerModule } from '../rest/passenger/passenger.module';

interface SwaggerModuleItem {
  path: string;
  module?: any;
}

export function setupSwagger(
  app: INestApplication,
  configService: ConfigService,
) {
  const apiVersion = configService.get('App.version') as string;
  const swaggerTitle = configService.get('Swagger.title') as string;
  const swaggerDescription = configService.get('Swagger.description') as string;
  const swaggerVersion = configService.get('Swagger.version') as string;

  const swaggerOptions = new DocumentBuilder()
    .setTitle(swaggerTitle)
    .setDescription(swaggerDescription)
    .setVersion(swaggerVersion)
    .build();
  const mainDocument = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup(`${apiVersion}/docs`, app, mainDocument);

  const modules: SwaggerModuleItem[] = [
    { path: 'admin', module: AdminModule },
    { path: 'driver', module: DriverModule },
    { path: 'passenger', module: PassengerModule },
  ];

  modules.forEach(({ path, module }) => {
    const doc = SwaggerModule.createDocument(app, swaggerOptions, {
      include: [module],
    });
    SwaggerModule.setup(`${apiVersion}/docs/${path}`, app, doc);
  });
}
