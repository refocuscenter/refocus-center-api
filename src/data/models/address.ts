import {
	Column,
	Entity,
	ManyToOne,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { TimeStampParanoid } from "../../utils/timeStampModels";
import { Delivery } from "./delivery";
import { UnitStore } from "./unitStore";
import { UserDetails } from "./userDetails";

export enum CountryCode {
	Brazil = 55,
}

export enum LocalityType {
	Residence, //Local de residência
	Workplace, //Local de trabalho
	Other = 99,
}

@Entity({ name: "address" })
export class Address extends TimeStampParanoid {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column("smallint", { unsigned: true })
	localityType!: LocalityType;

	@Column()
	addressLine1!: string;

	@Column("varchar", { nullable: true })
	addressLine2!: string | null;

	@Column("varchar", { nullable: true })
	addressLine3!: string | null;

	@Column()
	city!: string;

	@Column()
	state!: string;

	@Column()
	neighborhood!: string; //bairro

	@Column()
	zipCode!: number;

	@Column("smallint", { unsigned: true })
	countryCode!: CountryCode;

	@ManyToOne(() => UserDetails, (userDetails) => userDetails.addresses)
	userDetails!: UserDetails | null;

	@OneToMany(() => Delivery, (deliv) => deliv.deliveryAddress)
	deliveries!: Delivery[] | null;

	@OneToOne(() => UnitStore, (uStore) => uStore.address)
	unitStore!: UnitStore | null;
}
