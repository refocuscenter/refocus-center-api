import { red } from "chalk";
import { Response } from "express";

export function responseError500(response: Response, error: Error) {
	console.error(red(error.stack));
	response.status(500).json(error.message);
}

export function responseError404(
	response: Response,
	message = "Object not found"
) {
	response.status(404).send(message);
}
