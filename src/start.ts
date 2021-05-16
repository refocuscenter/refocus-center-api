console.clear();

import "reflect-metadata";
import { ServerConfig } from "./config/server";
import Server from "./loaders/server";

const { serverPort, mockDataBase } = ServerConfig;

const server = new Server(serverPort, mockDataBase);

server.start();
