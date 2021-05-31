import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TimeStampParanoid } from "../util/timeStampModel";
import { StoreUserAccount } from "./storeUserAccount";
import { UnitStore } from "./unitStore";

export enum StoreSector {
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
	sector!: StoreSector;

	@Column("bytea")
	image!: Buffer;

	@OneToMany(() => UnitStore, (model) => model.store, {
		cascade: ["insert", "update"],
	})
	unitaryStores!: UnitStore[];

	@OneToMany(() => StoreUserAccount, (model) => model.store)
	storeUserAccounts!: StoreUserAccount[] | null;
}