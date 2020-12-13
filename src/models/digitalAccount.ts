
import { Sequelize, ModelAttributes, InitOptions, DataTypes, FindOptions } from 'sequelize'
import { SuperModel } from '.';
import Store from './store';
import User from './user';

export default class DigitalAccountPrepay extends SuperModel {
    id!: number;
    balance!: number;
    idUser!: number; //fk
    idStore!: number;

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
        DigitalAccountPrepay.belongsTo(User, { foreignKey: 'idUser' })
        DigitalAccountPrepay.belongsTo(Store, { foreignKey: 'idStore' })
    }

    private static attributes: ModelAttributes = {
        id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
        balance: { type: DataTypes.FLOAT, allowNull: false },
        userId: { type: DataTypes.BIGINT, references: { model: User, key: 'id' }, allowNull: false },
        idStore:  { type: DataTypes.BIGINT, references: { model: Store, key: 'id' }, allowNull: false },
    };

    private static defaultScope: FindOptions<any> = {
        attributes: DigitalAccountPrepay.basicAttributes,
        include: []
    };

}
