import { RoutingControllersOptions } from "routing-controllers";

export const routingControllersOptions: RoutingControllersOptions = {
	controllers: [__dirname + "/../../rest/controller/**/*"],
	middlewares: [__dirname + "/../../rest/middleware/**/*"],
	defaultErrorHandler: false,
};
