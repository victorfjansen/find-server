import { Model, DataTypes } from 'sequelize';
import { sequelize } from 'src/database';

interface CompanyInstance extends Model {
    id: number;
    name: string;
    description: string;
    user_id: number;
    created_at: Date;
    updated_at: Date;
}

export const CompanyModel = sequelize.define<CompanyInstance>(
    'company',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT',
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
        tableName: 'company',
    }
);
