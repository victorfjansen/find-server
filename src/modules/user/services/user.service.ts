import { Injectable } from '@nestjs/common';
import { UserModel } from 'src/shared';

import { UserViewModel } from '../models';

@Injectable()
export class UserService {
    private userModel: typeof UserModel;

    constructor() {
        this.userModel = UserModel;
    }

    async getAllUsers(): Promise<UserViewModel[]> {
        return await this.userModel.findAll();
    }
}
