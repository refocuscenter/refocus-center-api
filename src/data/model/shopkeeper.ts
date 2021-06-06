import {
	Entity,
	JoinColumn,
	JoinTable,
	ManyToMany,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { IShopkeeper } from "../../domain/model/shopkeeper";
import { TimeStampParanoid } from "../util/timeStampModel";
import { SignedPlan } from "./signedPlan";
import { UnitStore } from "./unitStore";
import { UserDetails } from "./userDetails";

@Entity({ name: "shopkeepers" })
export class Shopkeeper extends TimeStampParanoid implements IShopkeeper {
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
