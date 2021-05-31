import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { TimeStampParanoid } from "../util/timeStampModel";
import { Address } from "./address";
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

	@ManyToOne(() => Address, (addr) => addr.deliveries)
	@JoinColumn()
	deliveryAddress!: Address;

	@ManyToOne(() => DeliveryMan, (addr) => addr.deliveries)
	@JoinColumn()
	deliveryMan!: DeliveryMan;

	@OneToOne(() => Purchase, (addr) => addr.delivery)
	@JoinColumn()
	purchase!: Purchase;
}
