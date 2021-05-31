import { green, red } from "chalk";
import Database from "./database";
import { createApp } from "./express";
import { startMocks } from "./mock";

const { log } = console;

export default class Server {
	private static database = new Database();

	private static app = createApp();

	constructor(private port: number, private startMocks?: boolean) {}

	public async start() {
		try {
			log("Iniciando servidor. . . ");

			await Server.database.connect();

			this.startMocks && startMocks();

			Server.app.listen(this.port, () => {
				log(`${green(`Servidor Iniciado em http://localhost:${this.port}/`)}`);
			});
		} catch (error) {
			console.error(red(error.stack));
		}
	}
}
