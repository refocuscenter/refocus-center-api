import { IUser } from "../../domain/model/user";
import { User } from "../model/user";
import { IRepository, Repository } from "./Repository";

export interface IUserRepository extends IRepository<IUser> {}

export class UserRepository
	extends Repository<User>
	implements IUserRepository
{
	constructor() {
		super(User);
	}
}
