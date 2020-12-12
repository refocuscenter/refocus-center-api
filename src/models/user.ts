
import { Sequelize, ModelAttributes, InitOptions, DataTypes, FindOptions } from 'sequelize'
import { SuperModel } from '.';

export default class User extends SuperModel {
    id!: number;
    login!: string;
    balance!: number;
    email!: string;
    fullName!: string;
    password!: string;

    static basicAttributes = ['id', 'login', 'balance', 'email', 'fullName'];

    static createAttributes = [
        'id', 'login', 'balance', 'email', 'fullName', 'password'
    ];

    static initDefault(sequelize: Sequelize) {

        const initOptions: InitOptions = {
            sequelize: sequelize,
            paranoid: true,
            defaultScope: User.defaultScope,
            scopes: {
                login: { attributes: this.createAttributes }
            }
        }

        User.init(User.attributes, initOptions);
    }

    static associate() {
    }

    private static attributes: ModelAttributes = {
        id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
        password: { type: DataTypes.STRING, allowNull: false },
        login: { type: DataTypes.STRING, allowNull: false, unique: true },
        balance: {
            type: DataTypes.DECIMAL, allowNull: false,
            get() {
                const rawValue = this.getDataValue('balance');
                return `R$ ${parseFloat(rawValue).toFixed(2)}`
            }
        },
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        fullName: { type: DataTypes.STRING, allowNull: false }
    };

    private static defaultScope: FindOptions<any> = {
        attributes: User.basicAttributes,
        include: []
    };

}
