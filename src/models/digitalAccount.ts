
import { Sequelize, ModelAttributes, InitOptions, DataTypes, FindOptions } from 'sequelize'
import { SuperModel } from '.';

export default class DigitalAccountPrepay extends SuperModel {
    id!: number;
    balance!: number;

    static basicAttributes = ['id', 'balance'];

    static initDefault(sequelize: Sequelize) {

        const initOptions: InitOptions = {
            sequelize: sequelize,
            paranoid: true,
            defaultScope: DigitalAccountPrepay.defaultScope
        }

        DigitalAccountPrepay.init(DigitalAccountPrepay.attributes, initOptions);
    }

    static associate() {
    }

    private static attributes: ModelAttributes = {
        id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
        balance: { type: DataTypes.FLOAT, allowNull: false }
    };

    private static defaultScope: FindOptions<any> = {
        attributes: DigitalAccountPrepay.basicAttributes,
        include: []
    };

}
