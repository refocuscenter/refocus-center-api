export interface Error {
	message: string;
	stack?: string;
}

export interface ResponseError {
	error: Error;
}
