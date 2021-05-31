import { json, urlencoded } from "body-parser";
import cors from "cors";
import express from "express";
import { useExpressServer } from "routing-controllers";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { removeCache } from "../rest/middleware/cache";
import { redirectToDocs } from "../rest/middleware/redirect";
import { corsConfig } from "./config/cors";
import { routingControllersOptions } from "./config/routing-controller";
import { swaggerJSDocOptions, swaggerUiOptions } from "./config/swagger";

const SCHEMASPY_OUTPUT = __dirname + "/../../../schemaspy";

export function createApp() {
	const app = express();

	//Middlewares Before Router
	app.use(cors(corsConfig));

	app.use(
		urlencoded({
			extended: true,
		})
	);

	app.use(json());

	//Routers
	app.use(
		"/docs",
		removeCache,
		swaggerUi.serve,
		swaggerUi.setup(swaggerJSDoc(swaggerJSDocOptions), swaggerUiOptions)
	);

	app.use("/schemaspy", express.static(SCHEMASPY_OUTPUT));

	useExpressServer(app, routingControllersOptions);

	//Middlewares After Router
	app.all("*", redirectToDocs);

	return app;
}
