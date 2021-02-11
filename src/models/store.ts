import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { TimeStampParanoid } from "../utils/modelsUtils";
import { Card } from "./card";
import { UnitStore } from "./unitStore";

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

    @OneToMany(() => Card, model => model.store)
    cards!: Card[] | null;
}
