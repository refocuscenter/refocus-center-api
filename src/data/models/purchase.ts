import {
	Column,
	Entity,
	ManyToOne,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { TimeStampParanoid } from "../../utils/timeStampModels";
import { Card } from "./card";
import { Delivery } from "./delivery";
import { StatementItem } from "./statementItem";
import { StoreUserAccount } from "./StoreUserAccount";

export enum PaymentFormat {
	PhysicalMoney,
	CestouCard,
}

@Entity({ name: "purchases" })
export class Purchase extends TimeStampParanoid {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column("bigint")
	value!: number;

	@Column()
	amount!: number;

	@Column("smallint")
	paymentFormat!: PaymentFormat;

	@ManyToOne(() => StoreUserAccount, (stUserAccount) => stUserAccount.purchases)
	storeUserAccount!: StoreUserAccount | null;

	@ManyToOne(() => Card, (card) => card.purchases)
	card!: Card | null;

	@OneToOne(() => Delivery, (deliv) => deliv.purchase)
	delivery!: Delivery | null;

	@OneToMany(() => StatementItem, (statProd) => statProd.purchase)
	statementItems!: StatementItem[];
}
