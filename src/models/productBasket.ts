
import { Sequelize, ModelAttributes, InitOptions, DataTypes, FindOptions } from 'sequelize'
import { SuperModel } from '.';
import Product from './product';
import User from './user';

export default class ProductBasket extends SuperModel {
    id!: number;
    userId!: number; //fk
    productId!: number; //fk
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
        ProductBasket.hasMany(Product, { foreignKey: 'productId' })
    }

    private static attributes: ModelAttributes = {
        id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
        productValue: { type: DataTypes.FLOAT, allowNull: false },
        amount: { type: DataTypes.INTEGER, allowNull: false },
        userId: { type: DataTypes.BIGINT, references: { model: User, key: 'id' } },
        productId: { type: DataTypes.BIGINT, references: { model: Product, key: 'id' } }
    };

    private static defaultScope: FindOptions<any> = {
        include: []
    };

}
