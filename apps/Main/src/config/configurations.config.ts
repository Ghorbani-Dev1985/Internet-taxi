import { registerAs } from '@nestjs/config';

const DatabaseConfig = registerAs('Database', () => ({
  username: 'postgres',
  password: '9636540011dvf',
  database: 'internet-taxi',
  host: 'localhost',
  port: '5432',
  dialect: 'postgres'
}));


export const configurations = [DatabaseConfig];
