
import { Sequelize, ModelAttributes, InitOptions, DataTypes, FindOptions } from 'sequelize'
import { SuperModel } from '.';

export default class User extends SuperModel {
    id!: number;
    login!: string;
    email!: string;
    fullName!: string;
    password!: string;

    static basicAttributes = ['id', 'login', 'email', 'fullName'];

    static createAttributes = [
        'id', 'login', 'email', 'fullName', 'password'
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
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        fullName: { type: DataTypes.STRING, allowNull: false }
    };

    private static defaultScope: FindOptions<any> = {
        attributes: User.basicAttributes,
        include: []
    };

}
