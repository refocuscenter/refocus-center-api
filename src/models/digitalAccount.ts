
class DigitalAccountPrepay {
    /*id!: string;
    balance!: number;
    userId!: string; //fk
    idStore!: number;

    static associate() {
        User.hasOne(DigitalAccountPrepay, { foreignKey: 'userId' })
        DigitalAccountPrepay.belongsTo(User, { foreignKey: 'userId' })   
        DigitalAccountPrepay.belongsTo(Store, { foreignKey: 'idStore' })
    }

    private static attributes: ModelAttributes = {
        id: { type: DataTypes.STRING, primaryKey: true },
        balance: {
            type: DataTypes.DECIMAL, allowNull: false,
            get() {
                const rawValue = this.getDataValue('balance');
                return `R$ ${parseFloat(rawValue).toFixed(2)}`
            }
        },
        userId: { type: DataTypes.STRING, references: { model: User, key: 'id' }, allowNull: false },
        idStore:  { type: DataTypes.BIGINT, references: { model: Store, key: 'id' }, allowNull: false },
    };*/

}
