import { json, urlencoded } from "body-parser";
import cors from "cors";
import express from "express";
import { useExpressServer } from "routing-controllers";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { corsConfig } from "../config/cors";
import { swaggerJSDocOptions, swaggerUiOptions } from "../config/swagger";
import { redirectToDocs } from "../middlewares/redirect";

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

	app.use(
		"/docs",
		swaggerUi.serve,
		swaggerUi.setup(swaggerJSDoc(swaggerJSDocOptions), swaggerUiOptions)
	);

	app.use("/schemaspy", express.static(__dirname + "/../../../schemaspy"));

	//Routers
	useExpressServer(app, {
		controllers: [__dirname + "/../controllers/**/*"],
	});

	//Middlewares After Router
	app.all("*", redirectToDocs);

	return app;
}
