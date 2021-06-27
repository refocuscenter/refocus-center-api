import { Request, Response } from "express";
import {
	ExpressErrorMiddlewareInterface,
	HttpError,
	Middleware,
} from "routing-controllers";

@Middleware({ type: "after" })
export class CustomErrorHandler implements ExpressErrorMiddlewareInterface {
	public error(
		error: HttpError,
		_request: Request,
		response: Response,
		next: (err: HttpError) => void
	) {
		if (error) {
			const status = error.httpCode || 500;
			response.status(status).send(error);
		}

		next(error);
	}
}
