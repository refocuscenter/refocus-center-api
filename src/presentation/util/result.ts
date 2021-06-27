// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ResultAny = Result<any>;

export interface Result<Data> {
	status: number;
	data: Data;
}

export function getErrorFromMsg(
	status: number,
	message: string,
	stack?: string
): Result<Error> {
	return {
		status,
		data: { message, stack } as Error,
	};
}

export function getError(status: number, error: Error): Result<Error> {
	return {
		status,
		data: error,
	};
}

export function getSuccess<Data>(status: number, data: Data): Result<Data> {
	return {
		status,
		data,
	};
}
