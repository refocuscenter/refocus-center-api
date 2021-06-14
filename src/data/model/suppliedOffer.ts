import {
	Column,
	Entity,
	JoinColumn,
	ManyToMany,
	ManyToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { ISuppliedOffer } from "../../domain/model/suppliedOffer";
import { ComboSuppliedOffers } from "./comboSuppliedOffer";
import { Offer } from "./offer";
import { UnitStore } from "./unitStore";

@Entity({ name: "supplied_offers" })
export class SuppliedOffer implements ISuppliedOffer {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column("bigint")
	value!: number;

	@Column("int", { nullable: true })
	stockAmount!: number | null;

	@ManyToOne(() => UnitStore, (model) => model.suppliedOffers)
	@JoinColumn()
	unitStore!: UnitStore;

	@ManyToOne(() => Offer, (model) => model.suppliedOffers, {
		cascade: true,
		eager: true,
	})
	@JoinColumn()
	offer!: Offer;

	@ManyToMany(
		() => ComboSuppliedOffers,
		(comboSuppliedOffers) => comboSuppliedOffers.suppliedOffers,
		{ nullable: true }
	)
	comboSuppliedOffers!: ComboSuppliedOffers[] | null;
}
