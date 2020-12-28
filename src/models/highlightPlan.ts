import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { SignedPlan } from "./signedPlan";

export enum SubscriptionType {
    WEEKLY,
    MONTHLY,
    QUARTERLY,
    YEARLY
}

@Entity({ name: "highlights_plans" })
export class HighlightsPlan {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column("text", { nullable: true })
    description!: string | null;

    @Column("bigint")
    value!: number;

    @Column("smallint")
    subscriptionType!: SubscriptionType;

    //TODO
    signedPlan!: SignedPlan[]
}
