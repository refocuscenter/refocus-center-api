import { DEFAULT_ECDH_CURVE } from "tls";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { TimeStampParanoid } from "../utils/modelsUtils";
import { AdvancedUser } from "./advancedUser";
import { Card } from "./card";
import { Delivery } from "./delivery";
import { SignedPlan } from "./signedPlan";
import { StatementItem } from "./statementItem";
import { InStoreUserAccount } from "./inStoreUserAccount";

export enum PaymentFormat {
    PhysicalMoney,
    CestouCard
}

@Entity({ name: "purchases" })
export class Purchase extends TimeStampParanoid{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column("bigint")
    value!: number;

    @Column()
    amount!: number;

    @Column("smallint")
    paymentFormat!: PaymentFormat;

    @ManyToOne(() => InStoreUserAccount, stUserAccount => stUserAccount.purchases)
    inStoreUserAccount!: InStoreUserAccount | null;

    @ManyToOne(() => Card, card => card.purchases)
    card!: Card | null;

    @OneToOne(() => Delivery, deliv => deliv.purchase)
    delivery!: Delivery | null;

    @OneToMany(() => StatementItem, statProd => statProd.purchase)
    statementItems!: StatementItem[];


}
