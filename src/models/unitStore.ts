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
import { SuppliedProduct } from "./suppliedProduct";
import { SuppliedService } from "./suppliedService";

@Entity({ name: "unit_stores" })
export class UnitStore {
	@PrimaryGeneratedColumn()
	id!: number;

	@ManyToMany(() => Shopkeeper, (model) => model.unitStores)
	shopkeepers!: Shopkeeper[];

	@OneToMany(() => StoreHighlight, (model) => model.unitStore)
	storeHighlights!: StoreHighlight[] | null;

	@OneToMany(() => SuppliedProduct, (model) => model.unitStore)
	suppliedProducts!: SuppliedProduct[] | null;

	@OneToMany(() => SuppliedService, (model) => model.unitStore, {
		cascade: ["insert", "update"],
		eager: true,
	})
	suppliedServices!: SuppliedService[] | null;

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
