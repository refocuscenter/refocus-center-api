import {
	Entity,
	JoinColumn,
	JoinTable,
	ManyToMany,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { TimeStampParanoid } from "../utils/modelsUtils";
import { AdvancedUser } from "./advancedUser";
import { SignedPlan } from "./signedPlan";
import { UnitStore } from "./unitStore";

@Entity({ name: "shopkeepers" })
export class Shopkeeper extends TimeStampParanoid {
	@PrimaryGeneratedColumn()
	id!: number;

	@OneToOne(() => AdvancedUser, (advUser) => advUser.shopkeeper)
	@JoinColumn()
	advancedUser!: AdvancedUser;

	@ManyToMany(() => UnitStore, (uStore) => uStore.shopkeepers)
	@JoinTable()
	unitStores!: UnitStore[];

	@OneToMany(() => SignedPlan, (sPlan) => sPlan.shopkeeper)
	signedPlan!: SignedPlan[] | null;
}
