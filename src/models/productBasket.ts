
import { Sequelize, ModelAttributes, InitOptions, DataTypes, FindOptions } from 'sequelize'
import { SuperModel } from '.';
import SuppliedProduct from './suppliedProduct';
import User from './user';

export default class ProductBasket extends SuperModel {
    id!: number;
    userId!: number; //fk
    productValue!: number;
    amount!: number;

    static basicAttributes = ['id', 'productValue', 'amount'];

    static initDefault(sequelize: Sequelize) {

        const initOptions: InitOptions = {
            sequelize: sequelize,
            paranoid: true,
            defaultScope: ProductBasket.defaultScope
        }

        ProductBasket.init(ProductBasket.attributes, initOptions);
    }

    static associate() {
        ProductBasket.belongsTo(User, { foreignKey: 'userId' })
    }

    private static attributes: ModelAttributes = {
        id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
        productValue: { type: DataTypes.FLOAT, allowNull: false },
        amount: { type: DataTypes.INTEGER, allowNull: false },
        userId: { type: DataTypes.BIGINT, references: { model: User, key: 'id' }, unique: true, allowNull: false },
    };

    private static defaultScope: FindOptions<any> = {
        include: []
    };

}
