import {
	Entity,
	JoinColumn,
	JoinTable,
	ManyToMany,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { TimeStampParanoid } from "../utils/timeStampModels";
import { SignedPlan } from "./signedPlan";
import { UnitStore } from "./unitStore";
import { UserDetails } from "./userDetails";

@Entity({ name: "shopkeepers" })
export class Shopkeeper extends TimeStampParanoid {
	@PrimaryGeneratedColumn()
	id!: number;

	@OneToOne(() => UserDetails, (advUser) => advUser.shopkeeper)
	@JoinColumn()
	userDetails!: UserDetails;

	@ManyToMany(() => UnitStore, (uStore) => uStore.shopkeepers)
	@JoinTable()
	unitStores!: UnitStore[];

	@OneToMany(() => SignedPlan, (sPlan) => sPlan.shopkeeper)
	signedPlan!: SignedPlan[] | null;
}
