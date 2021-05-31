import {
	Entity,
	JoinColumn,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { Delivery } from "./delivery";
import { UserDetails } from "./userDetails";

@Entity({ name: "delivery_people" })
export class DeliveryMan {
	@PrimaryGeneratedColumn()
	id!: number;

	@OneToMany(() => Delivery, (deliv) => deliv.deliveryMan)
	deliveries!: Delivery[] | null;

	@OneToOne(() => UserDetails, (userDetails) => userDetails.deliveryMan)
	@JoinColumn()
	userDetails!: UserDetails;
}
