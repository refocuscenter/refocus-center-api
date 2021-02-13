import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { TimeStampParanoid } from "../utils/modelsUtils";
import { Card } from "./card";
import { UnitStore } from "./unitStore";
import { InStoreUserAccount } from "./inStoreUserAccount";

@Entity({ name: "stores" })
export class Store extends TimeStampParanoid {

    @PrimaryColumn()
    id!: number;

    @Column("bigint", { unique: true })
    cnpj!: number;

    @Column()
    name!: string;

    @OneToMany(() => UnitStore, model => model.store)
    unitaryStores!: UnitStore[];

    @OneToMany(() => InStoreUserAccount, model => model.store)
    inStoreUserAccounts!: InStoreUserAccount[] | null;
}
