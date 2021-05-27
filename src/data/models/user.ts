import {
	Column,
	Entity,
	JoinColumn,
	JoinTable,
	ManyToMany,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { TimeStampParanoid } from "../../utils/timeStampModels";
import { StoreUserAccount } from "./StoreUserAccount";
import { UnitStore } from "./unitStore";
import { UserDetails } from "./userDetails";

@Entity({ name: "users" })
export class User extends TimeStampParanoid {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	displayName!: string;

	@Column({ length: 20, unique: true })
	phone!: string;

	@Column()
	email!: string;

	@Column()
	password!: string;

	@OneToOne(() => UserDetails, (advUser) => advUser.user, {
		cascade: ["insert", "update"],
		eager: true,
	})
	@JoinColumn()
	userDetails!: UserDetails;

	//Isso aqui pode vir de uma base de dados não relacional
	@ManyToMany(() => UnitStore)
	@JoinTable()
	favoriteUnitStores!: UnitStore[];

	@OneToMany(() => StoreUserAccount, (stUserAccount) => stUserAccount.user, {
		cascade: true,
	})
	storeUserAccounts!: StoreUserAccount[];
}
