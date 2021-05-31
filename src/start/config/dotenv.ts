import { DotenvConfigOptions } from "dotenv";
import path from "path";

const { RC_ENV } = process.env;

export const dotenvConfigOptions: DotenvConfigOptions = {
	path: path.resolve(process.cwd(), RC_ENV ? `.${RC_ENV}.env` : ".env"),
};
