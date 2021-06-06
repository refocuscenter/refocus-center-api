import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {
	IHighlightsPlan,
	SubscriptionType,
} from "../../domain/model/highlightPlan";
import { SignedPlan } from "./signedPlan";

@Entity({ name: "highlights_plans" })
export class HighlightsPlan implements IHighlightsPlan {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column("text", { nullable: true })
	description!: string | null;

	@Column("bigint")
	value!: number;

	@Column("smallint")
	subscriptionType!: SubscriptionType;

	@OneToMany(() => SignedPlan, (sPlan) => sPlan.highlightPlan)
	signedPlan!: SignedPlan[] | null;
}
