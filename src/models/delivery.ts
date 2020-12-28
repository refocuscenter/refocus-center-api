import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TimeStampParanoid } from "../utils/modelsUtils";
import { Address } from './address'
import { DeliveryMan } from "./deliveryMan";
import { Purchase } from "./purchase";

@Entity({ name: "delivery" })
export class Delivery extends TimeStampParanoid {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column("timestamp")
    scheduledDateTime!: Date;

    @Column("bigint")
    value!: number;

    //TODO
    deliveryAddress!: Address
    deliveryMan!: DeliveryMan
    purchase!: Purchase
}
