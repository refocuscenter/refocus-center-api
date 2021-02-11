import { DEFAULT_ECDH_CURVE } from "tls";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { TimeStampParanoid } from "../utils/modelsUtils";
import { Card } from "./card";
import { Delivery } from "./delivery";
import { SignedPlan } from "./signedPlan";
import { StatementItem } from "./statementItem";

export enum PaymentFormat {
    PhysicalMoney,
    CestouCard
}

@Entity({ name: "purchases" })
export class Purchase extends TimeStampParanoid{

    @PrimaryColumn()
    id!: number;

    @Column("bigint")
    value!: number;

    @Column()
    amount!: number;

    @Column("smallint")
    paymentFormat!: PaymentFormat;

    @ManyToOne(() => Card, card => card.purchases)
    card!: Card | null;

    @OneToOne(() => Delivery, deliv => deliv.purchase)
    delivery!: Delivery | null;

    @ManyToOne(() => SignedPlan, sPlan => sPlan.purchases)
    @JoinColumn()
    signedPlan!: SignedPlan | null;

    @OneToOne(() => StatementItem, statProd => statProd.purchase)
    statementItem!: StatementItem | null;

}
