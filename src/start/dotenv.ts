import dotenv from "dotenv";
import { dotenvConfigOptions } from "./config/dotenv";

export function startDotEnv() {
	dotenv.config(dotenvConfigOptions);
}
