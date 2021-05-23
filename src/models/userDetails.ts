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
import { Shopkeeper } from "./shopkeeper";
import { User } from "./user";

/**
 * Pessoa física ou Jurídica
 */
/*export enum Person {
    NaturalPerson,
    JuridicalPerson
}*/

@Entity({ name: "user_details" })
export class UserDetails extends TimeStampParanoid {
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

	@OneToOne(() => User, (user) => user.userDetails)
	user!: User;

	@OneToMany(() => Address, (address) => address.userDetails, {
		cascade: ["insert", "update"],
		eager: true,
	})
	@JoinColumn()
	addresses!: Address[];

	@OneToOne(() => DeliveryMan, (deliv) => deliv.userDetails)
	deliveryMan!: DeliveryMan | null;

	@OneToOne(() => Shopkeeper, (sKeeper) => sKeeper.userDetails, {
		cascade: ["insert", "update"],
		eager: true,
	})
	shopkeeper!: Shopkeeper | null;
}
