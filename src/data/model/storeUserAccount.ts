import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { TimeStampParanoid } from "../util/timeStampModel";
import { Card } from "./card";
import { Purchase } from "./purchase";
import { Store } from "./store";
import { User } from "./user";

@Entity({ name: "store_user_accounts" })
export class StoreUserAccount extends TimeStampParanoid {
	@PrimaryGeneratedColumn()
	id!: number;

	/**
	 * Value in centavos
	 */
	@Column({ default: 0 })
	balance!: number;

	@OneToMany(() => Purchase, (purch) => purch.storeUserAccount)
	@JoinColumn()
	purchases!: Purchase[] | null;

	@OneToOne(() => Card, (card) => card.storeUserAccount)
	card!: Card | null;

	@ManyToOne(() => Store, (st) => st.storeUserAccounts, { eager: true })
	@JoinColumn()
	store!: Store;

	@ManyToOne(() => User, (user) => user.storeUserAccounts, { eager: true })
	@JoinColumn()
	user!: User;
}
