import { DataTypes, Model } from 'sequelize';
import { sequelize } from 'src/database';

interface UserInstance extends Model {
    id: number;
    name: string;
    email: string;
    bio: string;
    phoneNumber: string;
    openToWork: boolean;
    created_at: Date;
    updated_at: Date;
}

export const UserModel = sequelize.define<UserInstance>('users', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    bio: DataTypes.TEXT,
    phoneNumber: DataTypes.STRING,
    openToWork: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
});
