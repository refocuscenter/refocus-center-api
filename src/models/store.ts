import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TimeStampParanoid } from "../utils/modelsUtils";
import { InStoreUserAccount } from "./inStoreUserAccount";
import { UnitStore } from "./unitStore";

export enum StoreType {
	/**
	 * Lavanderia
	 */
	Laundry,
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
	type!: StoreType;

	@Column("bytea")
	image!: Buffer;

	@OneToMany(() => UnitStore, (model) => model.store)
	unitaryStores!: UnitStore[];

	@OneToMany(() => InStoreUserAccount, (model) => model.store)
	inStoreUserAccounts!: InStoreUserAccount[] | null;
}
