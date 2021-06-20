export interface Result<Result> {
	status: number;
	data: Result | Error;
}
