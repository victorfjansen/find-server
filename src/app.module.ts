import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
    providers: [],
    controllers: [AppController],
})
export class AppModule {}
