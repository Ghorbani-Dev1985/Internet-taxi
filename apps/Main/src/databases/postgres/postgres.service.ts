import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class PostgresService implements OnModuleInit {
  
  public connection: Sequelize;

  constructor(private readonly configService: ConfigService) {}

  async onModuleInit() {
    try {
      console.log('Trying to connect to database with config');
      const dbConfig = this.configService.get('Database');
      
      this.connection = new Sequelize({
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
    } catch (e) {
      console.log('Failed to connect to postgreSQL', e);
      process.exit(1);
    }
  }
}