import { Entity, PrimaryGeneratedColumn, Column, Unique, Check, PrimaryColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { TimeStampParanoid } from "../utils/modelsUtils";
import { Address } from "./address";
import { Card } from "./card";
import { User } from "./user";

/**
 * Pessoa física ou Jurídica
 */
export enum Person {
    NaturalPerson,
    JuridicalPerson
}

@Entity({ name: "advanced_users" })
export class AdvancedUser extends TimeStampParanoid {
    @PrimaryColumn("uuid")
    id!: string;

    @Column()
    identityDocumentNumber!: string; //RG

    @Column("smallint")
    person!: Person;

    @Column()
    birthDate!: Date;

    @OneToOne(() => User,
        user => user.advancedUser)
    @JoinColumn()
    user!: User;

    @OneToMany(() => Address, address => address.advancedUser)
    address!: Address[];

    @OneToMany(() => Card, card => card.advancedUser)
    card!: Card[] | null;
}
