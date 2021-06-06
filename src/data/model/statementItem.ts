import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { IStatementItem } from "../../domain/model/statementItem";
import { Offer } from "./offer";
import { Purchase } from "./purchase";
import { SignedPlan } from "./signedPlan";
import { UnitStore } from "./unitStore";

/**
 * Produtos de extrato
 */
@Entity({ name: "statement_items" })
export class StatementItem implements IStatementItem {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column("bigint")
	value!: number;

	@Column()
	amount!: number;

	@Column()
	name!: string;

	@Column("text")
	description!: string;

	@ManyToOne(() => Purchase, (purchase) => purchase.statementItems)
	@JoinColumn()
	purchase!: Purchase;

	@ManyToOne(() => UnitStore)
	@JoinColumn()
	unitStore!: UnitStore;

	@ManyToOne(() => Offer)
	@JoinColumn()
	offer!: Offer | null;

	@ManyToOne(() => SignedPlan)
	@JoinColumn()
	signedPlan!: SignedPlan | null;
}
