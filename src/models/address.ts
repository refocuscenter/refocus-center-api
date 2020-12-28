import { Entity, Column, PrimaryGeneratedColumn, JoinTable, OneToOne, ManyToOne } from "typeorm"
import { TimeStampParanoid } from "../utils/modelsUtils"
import AdvancedUser from "./advancedUser";

export enum CountryCode {
    Brazil = 30
}

export enum LocalityType {
    Residence,
    Workplace,
    Other = 99
}

@Entity({ name: "address" })
export default class Address extends TimeStampParanoid {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column("smallint", { unsigned: true })
    localityType!: LocalityType;

    @Column()
    addressLine1!: string

    @Column("varchar", { nullable: true })
    addressLine2!: string | null

    @Column("varchar", { nullable: true })
    addressLine3!: string | null

    @Column()
    city!: string

    @Column()
    state!: string

    @Column()
    neighborhood!: string

    @Column()
    zipCode!: string

    @Column("smallint", { unsigned: true })
    countryCode!: CountryCode

    @ManyToOne(() => AdvancedUser,
        advancedUser => advancedUser.address)
    @JoinTable()
    advancedUser!: AdvancedUser;
}