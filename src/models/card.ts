import { Entity, Column, Unique, OneToOne, JoinColumn, PrimaryColumn, OneToMany, ManyToOne } from "typeorm";
import { TimeStampParanoid } from "../utils/modelsUtils";
import { AdvancedUser } from "./advancedUser";
import { Purchase } from "./purchase";
import { Store } from "./store";

export enum ExistenceType {
    Virtual,
    Physical
}

export enum FinancialType {
    PostPaid,
    PrePaid
}

@Entity({ name: "card" })
export class Card extends TimeStampParanoid {
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

    @ManyToOne(() => AdvancedUser, adUser => adUser.cards)
    advancedUser!: AdvancedUser;

    @ManyToOne(() => Store, st => st.cards)
    @JoinColumn()
    store!: Store;

    @OneToMany(() => Purchase, purch => purch.card)
    @JoinColumn()
    purchases!: Purchase[] | null;
}
