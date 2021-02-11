import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Address } from "./address";
import { Card } from "./card";
import { Shopkeeper } from "./shopkeeper";
import { Store } from "./store";
import { StoreHighlight } from "./storeHighlight";
import { SuppliedProduct } from "./suppliedProduct";
import { SuppliedService } from "./suppliedService";

@Entity({ name: "unit_stores" })
export class UnitStore {

    @PrimaryColumn()
    id!: number;

    @ManyToMany(() => Shopkeeper, model => model.unitStore)
    shopkeepers!: Shopkeeper[];

    @OneToMany(() => StoreHighlight, model => model.unitStore)
    storeHighlights!: StoreHighlight[] | null;

    @OneToMany(() => SuppliedProduct, model => model.unitStore)
    suppliedProducts!: SuppliedProduct[] | null;

    @OneToMany(() => SuppliedProduct, model => model.unitStore)
    suppliedServices!: SuppliedService[] | null;

    @ManyToOne(() => Store, model => model.unitaryStores)
    @JoinColumn()
    store!: Store;

    @OneToOne(() => Address, model => model.unitStore)
    @JoinColumn()
    address!: Address;
}
