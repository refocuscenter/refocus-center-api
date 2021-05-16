import {
	Column,
	Entity,
	JoinColumn,
	OneToMany,
	OneToOne,
	PrimaryColumn,
} from "typeorm";
import { TimeStampParanoid } from "../utils/timeStampModels";
import { Address } from "./address";
import { DeliveryMan } from "./deliveryMan";
import { InStoreUserAccount } from "./inStoreUserAccount";
import { Shopkeeper } from "./shopkeeper";
import { User } from "./user";

/**
 * Pessoa física ou Jurídica
 */
/*export enum Person {
    NaturalPerson,
    JuridicalPerson
}*/

@Entity({ name: "advanced_users" })
export class AdvancedUser extends TimeStampParanoid {
	@PrimaryColumn()
	id!: string;

	@Column({ nullable: true })
	fullName!: string;

	@Column({ unique: true })
	identityDocumentNumber!: number; //RG

	//@Column("varchar", { nullable: true, unique: true })
	//cpfCnpj!: string | null;

	//@Column("smallint")
	//person!: Person;

	@Column()
	birthDate!: Date;

	@OneToOne(() => User, (user) => user.advancedUser)
	user!: User;

	@OneToMany(() => Address, (address) => address.advancedUser, {
		cascade: ["insert", "update"],
		eager: true,
	})
	@JoinColumn()
	addresses!: Address[];

	@OneToMany(
		() => InStoreUserAccount,
		(sUserAccount) => sUserAccount.advancedUser
	)
	@JoinColumn()
	inStoreUserAccounts!: InStoreUserAccount[];

	@OneToOne(() => DeliveryMan, (deliv) => deliv.advancedUser)
	deliveryMan!: DeliveryMan | null;

	@OneToOne(() => Shopkeeper, (sKeeper) => sKeeper.advancedUser, {
		cascade: ["insert", "update"],
		eager: true,
	})
	shopkeeper!: Shopkeeper | null;
}
