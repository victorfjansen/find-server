import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './shared';

@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'findserverisrunning',
            database: 'FIND_SERVER',
            models: [User],
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
