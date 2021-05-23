import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { TimeStampParanoid } from "../utils/timeStampModels";
import { Card } from "./card";
import { Purchase } from "./purchase";
import { Store } from "./store";

@Entity({ name: "in_store_user_accounts" })
export class InStoreUserAccount extends TimeStampParanoid {
	@PrimaryGeneratedColumn()
	id!: number;

	/**
	 * Value in centavos
	 */
	@Column({ default: 0 })
	balance!: number;

	@OneToMany(() => Purchase, (purch) => purch.inStoreUserAccount)
	@JoinColumn()
	purchases!: Purchase[] | null;

	@OneToOne(() => Card, (card) => card.inStoreUserAccount)
	card!: Card | null;

	@ManyToOne(() => Store, (st) => st.inStoreUserAccounts)
	@JoinColumn()
	store!: Store;
}
