import { Entity, PrimaryGeneratedColumn, Column, Unique, Check, PrimaryColumn, OneToOne, JoinColumn, OneToMany, JoinTable } from "typeorm";
import { TimeStampParanoid } from "../utils/modelsUtils";
import { Address } from "./address";
import { Card } from "./card";
import { DeliveryMan } from "./deliveryMan";
import { Purchase } from "./purchase";
import { Shopkeeper } from "./shopkeeper";
import { User } from "./user";
import { InStoreUserAccount } from "./inStoreUserAccount";

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

    @Column({ nullable: true })
    fullName!: string;

    @Column({ unique: true })
    identityDocumentNumber!: string; //RG

    //@Column("varchar", { nullable: true, unique: true })
    //cpfCnpj!: string | null;

    @Column("smallint")
    person!: Person;

    @Column()
    birthDate!: Date;

    @OneToOne(() => User,
        user => user.advancedUser)
    @JoinColumn()
    user!: User;

    @OneToMany(() => Address, address => address.advancedUser)
    @JoinColumn()
    addresses!: Address[];

    @OneToMany(() => InStoreUserAccount, sUserAccount => sUserAccount.advancedUser)
    @JoinColumn()
    inStoreUserAccounts!: InStoreUserAccount[] | null;

    @OneToOne(() => DeliveryMan, deliv => deliv.advancedUser)
    deliveryMan!: DeliveryMan | null

    @OneToOne(() => Shopkeeper, sKeeper => sKeeper.advancedUser)
    shopkeeper!: Shopkeeper | null


}
