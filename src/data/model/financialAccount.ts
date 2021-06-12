import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { IFinancialAccount } from "../../domain/model/financialAccount";
import { TimeStampParanoid } from "../util/timeStampModel";
import { Card } from "./card";
import { Purchase } from "./purchase";
import { Store } from "./store";
import { User } from "./user";

@Entity({ name: "financial_accounts" })
export class FinancialAccount
	extends TimeStampParanoid
	implements IFinancialAccount
{
	@PrimaryGeneratedColumn()
	id!: number;

	/**
	 * Value in centavos
	 */
	@Column({ default: 0 })
	balance!: number;

	@OneToMany(() => Purchase, (purch) => purch.financialAccount)
	@JoinColumn()
	purchases!: Purchase[] | null;

	@OneToOne(() => Card, (card) => card.financialAccount)
	card!: Card | null;

	@ManyToOne(() => Store, (st) => st.financialAccounts, { eager: true })
	@JoinColumn()
	store!: Store;

	@ManyToOne(() => User, (user) => user.financialAccounts, { eager: true })
	@JoinColumn()
	user!: User;
}
