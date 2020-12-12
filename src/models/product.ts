
import { Sequelize, ModelAttributes, InitOptions, DataTypes, FindOptions } from 'sequelize'
import { SuperModel } from '.';

export default class Product extends SuperModel {
    id!: number;
    barCode!: string;
    name!: string;
    image!: Blob;
    description!: string;

    static basicAttributes = ['id', 'barCode', 'name', 'image', 'description'];

    static initDefault(sequelize: Sequelize) {

        const initOptions: InitOptions = {
            sequelize: sequelize,
            paranoid: true,
            defaultScope: Product.defaultScope
        }

        Product.init(Product.attributes, initOptions);
    }

    static associate() {
    }

    private static attributes: ModelAttributes = {
        id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
        barCode: { type: DataTypes.STRING, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        image: { type: DataTypes.BLOB },
        description: { type: DataTypes.TEXT, allowNull: false }
    };

    private static defaultScope: FindOptions<any> = {
        attributes: Product.basicAttributes,
        include: []
    };

}
