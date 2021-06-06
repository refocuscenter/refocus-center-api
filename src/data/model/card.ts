import {
	Column,
	Entity,
	JoinColumn,
	OneToMany,
	OneToOne,
	PrimaryColumn,
} from "typeorm";
import { ICard } from "../../domain/model/card";
import { TimeStampParanoid } from "../util/timeStampModel";
import { Purchase } from "./purchase";
import { StoreUserAccount } from "./storeUserAccount";

export enum ExistenceType {
	Virtual,
	Physical,
}

export enum FinancialType {
	PostPaid,
	PrePaid,
}

@Entity({ name: "card" })
export class Card extends TimeStampParanoid implements ICard {
	@PrimaryColumn("uuid")
	id!: number;

	@Column("smallint")
	financialType!: FinancialType;

	@Column("smallint")
	existenceType!: ExistenceType;

	/**
	 * Value in centavos
	 */
	@Column("bigint")
	limit!: number | null;

	/**
	 * Value in centavos
	 */
	@Column("bigint")
	balance!: number;

	@Column()
	pan!: string; //Primary Account Number

	@Column()
	cvv!: string;

	@Column()
	dateExp!: string;

	@Column()
	cardHolder!: string;

	@OneToMany(() => Purchase, (purch) => purch.card)
	@JoinColumn()
	purchases!: Purchase[] | null;

	@OneToOne(() => StoreUserAccount, (sUserAccount) => sUserAccount.card)
	@JoinColumn()
	storeUserAccount!: StoreUserAccount;
}
