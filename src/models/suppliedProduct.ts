
import { Sequelize, ModelAttributes, InitOptions, DataTypes, FindOptions } from 'sequelize'
import { SuperModel } from '.';
import Product from './product';
import ProductBasket from './productBasket';

export default class SuppliedProduct extends SuperModel {
    id!: number;
    value!: number;
    idProductBasket!: number; //FK

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
        SuppliedProduct.hasMany(ProductBasket, { foreignKey: 'idProductBasket' })
    }

    private static attributes: ModelAttributes = {
        id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
        value: { type: DataTypes.FLOAT, allowNull: false },
        productBasketId: { type: DataTypes.BIGINT, references: { model: ProductBasket, key: 'id' } }
    };

    private static defaultScope: FindOptions<any> = {
        attributes: SuppliedProduct.basicAttributes,
        include: []
    };

}
