import dotenv from 'dotenv';
import { green, red, whiteBright } from 'chalk';
import { createApp } from './app';
import Database from './database';
import { startMocks } from '../mocks';

//Init .env
dotenv.config();

const { log } = console;
const SERVER_PORT = process.env.PORT || 5445;

export default class Server {
    private static database = new Database();

    private static app = createApp();

    public async start() {
        try {
            log("Iniciando servidor. . . ")

            await Server.database.connect();

            startMocks();

            Server.app.listen(SERVER_PORT, () => {
                log(`${green(`Servidor Iniciado em http://localhost:${SERVER_PORT}/`)}`)
            });

        } catch (error) {
            console.error(red(error.stack));
        }
    }
}

