import {
	Column,
	Entity,
	JoinColumn,
	JoinTable,
	ManyToMany,
	ManyToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { IComboSuppliedOffers } from "../../domain/model/comboSuppliedOffers";
import { SuppliedOffer } from "./suppliedOffer";
import { UnitStore } from "./unitStore";

@Entity({ name: "combo_supplied_offers" })
export class ComboSuppliedOffers implements IComboSuppliedOffers {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column("bigint")
	value!: number;

	@Column()
	name!: string;

	@ManyToMany(
		() => SuppliedOffer,
		(suppliedOffer) => suppliedOffer.comboSuppliedOffers,
		{ eager: true }
	)
	@JoinTable()
	suppliedOffers!: SuppliedOffer[];

	@ManyToOne(() => UnitStore, (unitStore) => unitStore.suppliedOffers)
	@JoinColumn()
	unitStore!: UnitStore;
}
