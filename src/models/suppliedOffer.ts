import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { Offer } from "./offer";
import { UnitStore } from "./unitStore";

@Entity({ name: "supplied_offers" })
export class SuppliedOffer {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column("bigint")
	value!: number;

	@Column()
	stockAmount!: number;

	@ManyToOne(() => UnitStore, (model) => model.suppliedOffers)
	@JoinColumn()
	unitStore!: UnitStore;

	@ManyToOne(() => Offer, (model) => model.suppliedOffers, { eager: true })
	@JoinColumn()
	offer!: Offer;
}
