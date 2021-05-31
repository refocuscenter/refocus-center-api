import { toBoolean } from "../../presentation/util/convert";
import { startDotEnv } from "../dotenv";
startDotEnv();

const { RC_SERVER_PORT, RC_MOCK_DATABASE } = process.env;

export const ServerConfig = {
	serverPort: (RC_SERVER_PORT || 5445) as number,
	mockDataBase: toBoolean(RC_MOCK_DATABASE),
};
