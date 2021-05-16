import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
} from "typeorm";
import { TimeStampParanoid } from "../utils/timeStampModels";
import { HighlightsPlan } from "./highlightPlan";
import { Shopkeeper } from "./shopkeeper";
import { StoreHighlight } from "./storeHighlight";

@Entity({ name: "signed_plans" })
export class SignedPlan extends TimeStampParanoid {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column("bigint")
	contractedValue!: number;

	@ManyToOne(() => Shopkeeper, (sk) => sk.signedPlan)
	@JoinColumn()
	shopkeeper!: Shopkeeper;

	@ManyToOne(() => HighlightsPlan, (hPlan) => hPlan.signedPlan)
	@JoinColumn()
	highlightPlan!: HighlightsPlan;

	@OneToMany(() => StoreHighlight, (shl) => shl.signedPlan)
	@JoinColumn()
	storeHighlight!: StoreHighlight[] | null;
}
