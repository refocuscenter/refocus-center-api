import { Model, Sequelize } from 'sequelize'

//Alert: this models must be in order
const modelList = [
    './user',
    './product',    
    './productBasket',
    './recognitionTerm',
    './store',
    './suppliedProduct',
    './digitalAccount'
]

export class SuperModel<A extends {} = any, B extends {} = A> extends Model<A, B> {
    static basicAttributes?: string[] | string[][];
    static associate = () => {};
    static initDefault = (sequelize: Sequelize) => {};    
    static populate = async () => {};
}

function importModels(): (typeof SuperModel)[] {
    return modelList.map(model => {
        return require(model).default
    });
}

export default importModels;