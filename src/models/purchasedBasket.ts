import { Sequelize, ModelAttributes, InitOptions, DataTypes, FindOptions } from 'sequelize'
import { SuperModel } from '.';
import DigitalAccountPrepay from './digitalAccount';
import ProductsBasket from './productsBasket';

export default class PurchasedBasket extends SuperModel {
    id!: number;
    idDigitalAccount!: string; //FK
    idProductsBasket!: number; //FK
    totalValue!: number;
    
    static basicAttributes = [ 'id', 'totalValue' ];

    static initDefault(sequelize: Sequelize) {

        const initOptions: InitOptions = {
            sequelize: sequelize,
            paranoid: true,
            defaultScope: PurchasedBasket.defaultScope
        }

        PurchasedBasket.init(PurchasedBasket.attributes, initOptions);
    }

    static associate() {
        PurchasedBasket.belongsTo(ProductsBasket, { foreignKey: 'idProductsBasket' })
        PurchasedBasket.belongsTo(DigitalAccountPrepay, { foreignKey: 'idDigitalAccount' })
    }

    private static attributes: ModelAttributes = {
        id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
        totalValue: { type: DataTypes.FLOAT, allowNull: false },
        idDigitalAccount: { type: DataTypes.STRING, references: { model: DigitalAccountPrepay, key: 'id' }, allowNull: false },
        idProductsBasket: { type: DataTypes.BIGINT, references: { model: ProductsBasket, key: 'id' }, allowNull: false, unique: true },
    };

    private static defaultScope: FindOptions<any> = {
        attributes: PurchasedBasket.basicAttributes,
        include: []
    };

}
