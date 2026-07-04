import { registerAs } from '@nestjs/config';

const AppConfig = registerAs('App', () => ({
  version: 'v1',
  port: 3001,
}));

const SwaggerConfig = registerAs('Swagger', () => ({
  title: 'internet-taxi',
  description: 'This is online transporter application',
  version: '1.0.0',
}));

export const configurations = [AppConfig, SwaggerConfig];
