import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserModel } from './models/users.model';

@Controller('app')
export class AppController {
    @Get()
    async getUsers(): Promise<any> {
        const userModel = await UserModel.findAll();
        return userModel;
    }

    @Post()
    async createUser(@Body() user): Promise<any> {
        await UserModel.create(user);
    }
}
