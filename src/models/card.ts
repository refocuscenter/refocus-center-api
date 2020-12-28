import { Entity, Column, Unique, OneToOne, JoinColumn, PrimaryColumn, OneToMany, ManyToOne } from "typeorm";
import { TimeStampParanoid } from "../utils/modelsUtils";
import { AdvancedUser } from "./advancedUser";

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

    @ManyToOne(() => AdvancedUser, advancedUser => advancedUser.card)
    @JoinColumn()
    advancedUser!: AdvancedUser;
}
