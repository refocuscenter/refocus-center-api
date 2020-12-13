import { Sequelize, ModelAttributes, InitOptions, DataTypes, FindOptions } from 'sequelize'
import { SuperModel } from '.';

export default class Purchase extends SuperModel {
    id!: number;
    totalValue!: number;
    
    static basicAttributes = [ 'id', 'totalValue' ];

    static initDefault(sequelize: Sequelize) {

        const initOptions: InitOptions = {
            sequelize: sequelize,
            paranoid: true,
            defaultScope: Purchase.defaultScope
        }

        Purchase.init(Purchase.attributes, initOptions);
    }

    static associate() {
    }

    private static attributes: ModelAttributes = {
        id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
        totalValue: { type: DataTypes.FLOAT, allowNull: false }
    };

    private static defaultScope: FindOptions<any> = {
        attributes: Purchase.basicAttributes,
        include: []
    };

}
