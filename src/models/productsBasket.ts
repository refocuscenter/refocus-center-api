
import { Sequelize, ModelAttributes, InitOptions, DataTypes, FindOptions } from 'sequelize'
import { SuperModel } from '.';
import User from './user';

export default class ProductsBasket extends SuperModel {
    id!: number;
    userId!: string; //fk
    amount!: number;

    static basicAttributes = ['id', 'amount'];

    static initDefault(sequelize: Sequelize) {

        const initOptions: InitOptions = {
            sequelize: sequelize,
            paranoid: true,
            defaultScope: ProductsBasket.defaultScope
        }

        ProductsBasket.init(ProductsBasket.attributes, initOptions);
    }

    static associate() {
        ProductsBasket.belongsTo(User, { foreignKey: 'userId' })
    }

    private static attributes: ModelAttributes = {
        id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
        amount: { type: DataTypes.INTEGER, allowNull: false },
        userId: { type: DataTypes.STRING, references: { model: User, key: 'id' }, unique: true, allowNull: false },
    };

    private static defaultScope: FindOptions<any> = {
        include: []
    };

}
