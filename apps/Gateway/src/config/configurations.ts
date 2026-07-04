import { registerAs } from '@nestjs/config';

const AppConfig = registerAs('App', () => ({
  port: 3001,
}));

export const configurations = [AppConfig];
