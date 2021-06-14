import {
	Entity,
	JoinColumn,
	ManyToMany,
	ManyToOne,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { IUnitStore } from "../../domain/model/unitStore";
import { Address } from "./address";
import { ComboSuppliedOffers } from "./comboSuppliedOffer";
import { Shopkeeper } from "./shopkeeper";
import { Store } from "./store";
import { StoreHighlight } from "./storeHighlight";
import { SuppliedOffer } from "./suppliedOffer";

@Entity({ name: "unit_stores" })
export class UnitStore implements IUnitStore {
	@PrimaryGeneratedColumn()
	id!: number;

	@ManyToMany(() => Shopkeeper, (model) => model.unitStores)
	shopkeepers!: Shopkeeper[];

	@OneToMany(() => StoreHighlight, (model) => model.unitStore)
	storeHighlights!: StoreHighlight[] | null;

	@OneToMany(() => SuppliedOffer, (model) => model.unitStore, {
		eager: true,
		cascade: true,
	})
	suppliedOffers!: SuppliedOffer[] | null;

	@OneToMany(() => ComboSuppliedOffers, (model) => model.unitStore, {
		eager: true,
		cascade: true,
	})
	comboSuppliedOffers!: ComboSuppliedOffers[] | null;

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
