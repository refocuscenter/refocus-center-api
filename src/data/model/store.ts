import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IStore, StoreSector } from "../../domain/model/store";
import { TimeStampParanoid } from "../util/timeStampModel";
import { StoreUserAccount } from "./storeUserAccount";
import { UnitStore } from "./unitStore";

@Entity({ name: "stores" })
export class Store extends TimeStampParanoid implements IStore {
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
