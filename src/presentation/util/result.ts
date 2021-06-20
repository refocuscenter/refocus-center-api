export interface Result {
	status: number;
	data: any;
}

export function getErrorFromMsg(
	status: number,
	message: string,
	stack?: string
): Result {
	return {
		status,
		data: { message, stack } as Error,
	};
}

export function getError(status: number, error: Error): Result {
	return {
		status,
		data: error,
	};
}

export function getSuccess(status: number, data: any): Result {
	return {
		status,
		data,
	};
}
