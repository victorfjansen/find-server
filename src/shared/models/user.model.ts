import { Model, DataTypes } from 'sequelize';
import { sequelize } from 'src/database';

interface UserInstance extends Model {
    id: number;
    company_id: number;
    name: string;
    email: string;
    description: string;
    created_at: Date;
    updated_at: Date;
}

export const UserModel = sequelize.define<UserInstance>(
    'user',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        company_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'company',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT',
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        tableName: 'user',
    }
);
