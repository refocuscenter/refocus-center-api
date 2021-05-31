import { red } from "chalk";
import { Response } from "express";

export function responseError500(response: Response, error: Error) {
	console.error(red(error.stack));
	response.status(500).json(error.message);
}

export function responseError404(
	response: Response,
	message: string = "Object not found"
) {
	response.status(404).send(message);
}
export function responseError409(
	response: Response,
	message: string = "Conflict"
) {
	response.status(409).send(message);
}

export function responseDeleted(response: Response, deletedObject: any) {
	return response.status(200).json(deletedObject);
}
