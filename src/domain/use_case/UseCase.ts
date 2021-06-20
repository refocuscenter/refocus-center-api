import { Result } from "../../presentation/util/result";

export interface UseCase<IRequest, IResponse> {
	run(request?: IRequest): Promise<Result<IResponse | Error>>;
}
