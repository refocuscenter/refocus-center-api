import {
	Column,
	Entity,
	ManyToOne,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { IPurchase, PaymentFormat } from "../../domain/model/purchase";
import { TimeStampParanoid } from "../util/timeStampModel";
import { Card } from "./card";
import { Delivery } from "./delivery";
import { FinancialAccount } from "./financialAccount";
import { StatementItem } from "./statementItem";

@Entity({ name: "purchases" })
export class Purchase extends TimeStampParanoid implements IPurchase {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column("bigint")
	value!: number;

	@Column()
	amount!: number;

	@Column("smallint")
	paymentFormat!: PaymentFormat;

	@ManyToOne(
		() => FinancialAccount,
		(financialAccount) => financialAccount.purchases
	)
	financialAccount!: FinancialAccount | null;

	@ManyToOne(() => Card, (card) => card.purchases)
	card!: Card | null;

	@OneToOne(() => Delivery, (deliv) => deliv.purchase)
	delivery!: Delivery | null;

	@OneToMany(() => StatementItem, (statProd) => statProd.purchase)
	statementItems!: StatementItem[];
}
