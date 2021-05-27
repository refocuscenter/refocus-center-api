import { Options } from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

export const swaggerJSDocOptions: Options = {
	definition: {
		openapi: "3.0.3",
		info: {
			version: "1.0.0",
			title: "Cestou API",
			description: "<a href='/schemaspy'>Click here</a> to see database schema",
		},
		servers: [
			{
				url: "/",
				//description: 'Current Server'
			},
			{
				url: "https://cestou-api.herokuapp.com/",
			},
		],
	},
	apis: ["src/presentation/docs/**/*.yml"],
};

export const swaggerUiOptions: SwaggerUiOptions = {
	customCss: `.swagger-ui .curl-command {
        display: none;
    }`,
};
