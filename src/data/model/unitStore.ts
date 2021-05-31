import {
	Entity,
	JoinColumn,
	ManyToMany,
	ManyToOne,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { Address } from "./address";
import { Shopkeeper } from "./shopkeeper";
import { Store } from "./store";
import { StoreHighlight } from "./storeHighlight";
import { SuppliedOffer } from "./suppliedOffer";

@Entity({ name: "unit_stores" })
export class UnitStore {
	@PrimaryGeneratedColumn()
	id!: number;

	@ManyToMany(() => Shopkeeper, (model) => model.unitStores)
	shopkeepers!: Shopkeeper[];

	@OneToMany(() => StoreHighlight, (model) => model.unitStore)
	storeHighlights!: StoreHighlight[] | null;

	@OneToMany(() => SuppliedOffer, (model) => model.unitStore, {
		cascade: ["insert", "update"],
	})
	suppliedOffers!: SuppliedOffer[] | null;

	@ManyToOne(() => Store, (model) => model.unitaryStores, {
		eager: true,
	})
	@JoinColumn()
	store!: Store;

	@OneToOne(() => Address, (model) => model.unitStore, {
		cascade: ["insert", "update"],
		eager: true,
	})
	@JoinColumn()
	address!: Address;
}
