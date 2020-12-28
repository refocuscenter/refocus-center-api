import { Column, Entity, PrimaryColumn } from "typeorm";
import { TimeStampParanoid } from "../utils/modelsUtils";

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

}
