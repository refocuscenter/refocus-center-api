
import { Sequelize, ModelAttributes, InitOptions, DataTypes, FindOptions } from 'sequelize'
import { SuperModel } from '.';

export default class Store extends SuperModel {
    id!: number;
    cnpj!: number;
    name!: string;

    static basicAttributes = ['id', 'cnpj', 'name'];

    static initDefault(sequelize: Sequelize) {

        const initOptions: InitOptions = {
            sequelize: sequelize,
            paranoid: true,
            defaultScope: Store.defaultScope
        }

        Store.init(Store.attributes, initOptions);
    }

    static associate() {
    }

    private static attributes: ModelAttributes = {
        id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
        cnpj: { type: DataTypes.BIGINT, allowNull: false, unique: true },
        name: { type: DataTypes.STRING, allowNull: false },
    };

    private static defaultScope: FindOptions<any> = {
        attributes: Store.basicAttributes,
        include: []
    };

}
