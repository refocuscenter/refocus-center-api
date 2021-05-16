import {
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { TimeStampParanoid } from "../utils/timeStampModels";
import { AdvancedUser } from "./advancedUser";
import { Card } from "./card";
import { Purchase } from "./purchase";
import { Store } from "./store";

@Entity({ name: "in_store_user_accounts" })
export class InStoreUserAccount extends TimeStampParanoid {
	@PrimaryGeneratedColumn()
	id!: number;

	@OneToMany(() => Purchase, (purch) => purch.inStoreUserAccount)
	@JoinColumn()
	purchases!: Purchase[] | null;

	@OneToOne(() => Card, (card) => card.inStoreUserAccount)
	card!: Card | null;

	@ManyToOne(() => AdvancedUser, (adUser) => adUser.inStoreUserAccounts)
	advancedUser!: AdvancedUser;

	@ManyToOne(() => Store, (st) => st.inStoreUserAccounts)
	@JoinColumn()
	store!: Store;
}
