import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserViewModel } from '../models';
import { UserService } from '../services/user.service';

@Controller('api/v1/user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    async getUsers(): Promise<UserViewModel[]> {
        return await this.userService.getAllUsers();
    }
}
