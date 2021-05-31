import { Address, LocalityType } from "../../data/model/address";
import { User } from "../../data/model/user";
import * as PresentationModels from "../model";
import { UserResponse, UsersResponse } from "../response/success";

export const UserConvert = function () {
	return { toUserResponse, toUsersResponse, toUser };

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
		const { id, displayName, email, phone, userDetails } = user;
		const { birthDate, fullName, identityDocumentNumber, addresses } =
			userDetails;

		return {
			displayName,
			id,
			email,
			phone,
			userDetails: {
				birthDate,
				fullName,
				identityDocumentNumber,
				addresses: toAddress(addresses),
			},
		};
	}

	function toAddress(addresses: Address[]) {
		return addresses.map(
			({
				id,
				zipCode,
				neighborhood,
				city,
				state,
				countryCode,
				addressLine1,
				addressLine2,
				addressLine3,
				localityType,
			}) =>
				({
					id,
					zipCode,
					neighborhood,
					city,
					state,
					countryCode,
					addressLines: [addressLine1, addressLine2, addressLine3].filter(
						(v) => v
					),
					localityType: LocalityType[localityType].toString(),
				} as PresentationModels.Address)
		);
	}
};
