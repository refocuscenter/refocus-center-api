import { IUser } from "../../domain/model/user";
import { User } from "../model/user";
import { IRepository, Repository } from "./Repository";

export type IUserRepository = IRepository<IUser>;

export class UserRepository
	extends Repository<User>
	implements IUserRepository
{
	constructor() {
		super(User);
	}
}
