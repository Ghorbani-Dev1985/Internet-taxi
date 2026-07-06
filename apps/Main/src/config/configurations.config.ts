import { registerAs } from '@nestjs/config';

const DatabaseConfig = registerAs('Database', () => ({
  username: 'postgres',
  password: '9636540011dvf',
  database: 'internet-taxi',
  host: 'localhost',
  port: '5432',
  dialect: 'postgres'
}));

const RedisConfig = registerAs('Redis', () => ({
  host: 'localhost',
  port: '6379',
  cacheDb: 10,
  sessionDb: 11
}));


export const configurations = [DatabaseConfig , RedisConfig];
