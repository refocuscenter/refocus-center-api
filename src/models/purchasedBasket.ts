import { Sequelize, ModelAttributes, InitOptions, DataTypes, FindOptions } from 'sequelize'
import { SuperModel } from '.';
import DigitalAccountPrepay from './digitalAccount';
import ProductBasket from './productBasket';

export default class PurchasedBasket extends SuperModel {
    id!: number;
    idDigitalAccount!: string; //FK
    idProductBasket!: number; //FK
    totalValue!: number;
    
    static basicAttributes = [ 'id' ];

    static initDefault(sequelize: Sequelize) {

        const initOptions: InitOptions = {
            sequelize: sequelize,
            paranoid: true,
            defaultScope: PurchasedBasket.defaultScope
        }

        PurchasedBasket.init(PurchasedBasket.attributes, initOptions);
    }

    static associate() {
        PurchasedBasket.belongsTo(ProductBasket, { foreignKey: 'idProductBasket' })
        DigitalAccountPrepay.belongsTo(DigitalAccountPrepay, { foreignKey: 'idDigitalAccount' })
    }

    private static attributes: ModelAttributes = {
        id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
        totalValue: { type: DataTypes.FLOAT, allowNull: false },
        idDigitalAccount: { type: DataTypes.STRING, references: { model: DigitalAccountPrepay, key: 'id' }, allowNull: false },
        idProductBasket: { type: DataTypes.BIGINT, references: { model: ProductBasket, key: 'id' }, allowNull: false, unique: true },
    };

    private static defaultScope: FindOptions<any> = {
        attributes: PurchasedBasket.basicAttributes,
        include: []
    };

}
