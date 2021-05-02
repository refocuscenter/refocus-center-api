import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { TimeStampParanoid } from "../utils/modelsUtils";
import { Card } from "./card";
import { UnitStore } from "./unitStore";
import { InStoreUserAccount } from "./inStoreUserAccount";

export enum StoreType {
    /**
     * Lavanderia
     */
    Laundry
}

@Entity({ name: "stores" })
export class Store extends TimeStampParanoid {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column("bigint", { unique: true })
    cnpj!: number;

    @Column()
    name!: string;

    @Column("smallint")
    type!: StoreType

    @Column("bytea")
    image!: Buffer

    @OneToMany(() => UnitStore, model => model.store)
    unitaryStores!: UnitStore[];

    @OneToMany(() => InStoreUserAccount, model => model.store)
    inStoreUserAccounts!: InStoreUserAccount[] | null;
}
