import { getRepository } from "typeorm";
import { stores } from "../data/mock/store";
import { users } from "../data/mock/user";
import { Store } from "../data/model/store";
import { User } from "../data/model/user";

export async function startMocks() {
	await getRepository(Store).save(stores);
	await getRepository(User).save(users);

	console.log("Mocks criados!");
}
