import { UserModel } from './user.model';
import { CompanyModel } from './company.model';

CompanyModel.hasOne(UserModel);

export { UserModel, CompanyModel };
