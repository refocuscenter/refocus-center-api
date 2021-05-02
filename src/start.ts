import "reflect-metadata";
import dotenv from 'dotenv';
import Server from './loaders/server'
import { toBoolean } from "./utils/convert";

dotenv.config(); //Init .env
const SERVER_PORT = (process.env.PORT || 5445) as number;
const RC_MOCK_DATABASE = toBoolean(process.env.RC_MOCK_DATABASE);

console.clear();

const server =  new Server(SERVER_PORT, RC_MOCK_DATABASE);
    
server.start();