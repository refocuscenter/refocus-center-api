import { Column, Entity, PrimaryColumn } from "typeorm";
import { TimeStampParanoid } from "../utils/modelsUtils";
import { UnitStore } from "./unitStore";

@Entity({ name: "stores" })
export class Store extends TimeStampParanoid {

    @PrimaryColumn()
    id!: number;

    @Column("bigint", { unique: true })
    cnpj!: number;

    @Column()
    name!: string;

    //TODO
    store!: UnitStore[]
}
