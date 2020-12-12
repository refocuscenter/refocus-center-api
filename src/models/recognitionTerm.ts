
import { Sequelize, ModelAttributes, InitOptions, DataTypes, FindOptions } from 'sequelize'
import { SuperModel } from '.';

export default class RecognitionTerm extends SuperModel {
    id!: number;
    term!: string;

    static basicAttributes = ['id', 'term'];

    static initDefault(sequelize: Sequelize) {

        const initOptions: InitOptions = {
            sequelize: sequelize,
            paranoid: true,
            defaultScope: RecognitionTerm.defaultScope
        }

        RecognitionTerm.init(RecognitionTerm.attributes, initOptions);
    }

    static associate() {
    }

    private static attributes: ModelAttributes = {
        id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
        term: { type: DataTypes.STRING, allowNull: false }
    };

    private static defaultScope: FindOptions<any> = {
        attributes: RecognitionTerm.basicAttributes,
        include: []
    };

}
