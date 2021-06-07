import { IAddress, LocalityType } from "../../domain/model/address";
import { IUser } from "../../domain/model/user";
import * as PresentationModels from "../model";
import { UserResponse, UsersResponse } from "../response/success";

export const UserConvert = function () {
	return { toUserResponse, toUsersResponse, toUser };

	function toUserResponse(user: IUser): UserResponse {
		return {
			user: toUser(user),
		};
	}

	function toUsersResponse(users: IUser[], count: number): UsersResponse {
		return {
			users: users.map((user) => {
				return toUser(user);
			}),
			count: count,
		};
	}

	function toUser(user: IUser): PresentationModels.User {
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

	function toAddress(addresses: IAddress[]) {
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
