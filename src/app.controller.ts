import { Controller, Get } from '@nestjs/common';
import { CompanyModel } from './shared';

@Controller('app')
export class AppController {
    companyModel: typeof CompanyModel;

    constructor() {
        this.companyModel = CompanyModel;
    }

    @Get()
    async somefunction(): Promise<any> {
        return this.companyModel.findAll({ include: 'user' });
    }
}
