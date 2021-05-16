import { User } from "../../models/user";
import * as PresentationModels from "../../presentation/models";
import { UserResponse, UsersResponse } from "../../presentation/responses";

export const UserConvert = function () {
	return { toUserResponse, toUsersResponse };

	function toUserResponse(user: User): UserResponse {
		return {
			user: toUser(user),
		};
	}

	function toUsersResponse(users: User[], count: number): UsersResponse {
		return {
			users: users.map((user) => {
				return toUser(user);
			}),
			count: count,
		};
	}

	function toUser(user: User): PresentationModels.User {
		const { id, displayName } = user;

		return { displayName: displayName, id: id };
	}
};
