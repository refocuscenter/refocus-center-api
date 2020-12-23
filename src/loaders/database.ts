import { red, whiteBright } from 'chalk';
import { Connection, createConnection } from 'typeorm';

const { log, error } = console;

export default class Database {

    private connection: Connection | null = null;

    public async connect() {

        try {
            this.connection = await createConnection()

            await this.connection.synchronize();

            //1. Authenticate (test)
            //2. Init Models
            //3. Sync (if Sync)
            //3.1 Associate Models
            //3.2 PopulateModels

        } catch (exception) {
            error(`${red('[TypeORM] Erro ao conectar-se ao banco de dados: ')}`);
            error(`${red(exception.stack)}`);
        }
    };

    public async disconnect() {
        try {
            if (this.connection != null)
                this.connection.close()
            else
                throw "Connection is null: try to connect first"

        } catch (exception) {
            error(`${red(exception.message)}`);
            error(`${red(exception.stack)}`);
        }
    }

}