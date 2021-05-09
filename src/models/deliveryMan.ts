import {
	Entity,
	JoinColumn,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { AdvancedUser } from "./advancedUser";
import { Delivery } from "./delivery";

@Entity({ name: "delivery_people" })
export class DeliveryMan {
	@PrimaryGeneratedColumn()
	id!: number;

	@OneToMany(() => Delivery, (deliv) => deliv.deliveryMan)
	deliveries!: Delivery[] | null;

	@OneToOne(() => AdvancedUser, (adUser) => adUser.deliveryMan)
	@JoinColumn()
	advancedUser!: AdvancedUser;
}
