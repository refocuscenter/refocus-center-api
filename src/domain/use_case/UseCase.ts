import { Result } from "../../presentation/util/result";

export interface UseCase<IRequest> {
	run(request?: IRequest): Promise<Result>;
}
