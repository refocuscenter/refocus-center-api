import { Request, Response } from "express";
import {
	ExpressErrorMiddlewareInterface,
	HttpError,
	Middleware,
} from "routing-controllers";
import { ResultAny } from "../../presentation/util/result";

interface ApplicationError extends Error, HttpError, ResultAny {}

@Middleware({ type: "after" })
export class CustomErrorHandler implements ExpressErrorMiddlewareInterface {
	public error(
		error: ApplicationError,
		_request: Request,
		response: Response,
		next: (err: HttpError) => void
	) {
		if (error) {
			const status = error.httpCode || error.status || 500;
			response.status(status).send(error);
		}

		next(error);
	}
}
