
import { Sequelize, ModelAttributes, InitOptions, DataTypes, FindOptions } from 'sequelize'
import { SuperModel } from '.';

export default class SuppliedProduct extends SuperModel {
    id!: number;
    value!: number;

    static basicAttributes = ['id', 'value'];

    static initDefault(sequelize: Sequelize) {

        const initOptions: InitOptions = {
            sequelize: sequelize,
            paranoid: true,
            defaultScope: SuppliedProduct.defaultScope
        }

        SuppliedProduct.init(SuppliedProduct.attributes, initOptions);
    }

    static associate() {
    }

    private static attributes: ModelAttributes = {
        id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
        value: { type: DataTypes.FLOAT, allowNull: false }
    };

    private static defaultScope: FindOptions<any> = {
        attributes: SuppliedProduct.basicAttributes,
        include: []
    };

}
