import { Column, Entity, PrimaryColumn } from "typeorm";
import { Address } from "./address";
import { Store } from "./store";

@Entity({ name: "unit_stores" })
export class UnitStore {

    @PrimaryColumn()
    id!: number;

    //TODO
    store!: Store;
    address!: Address;
}
