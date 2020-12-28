import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToOne, JoinColumn } from "typeorm";
import { TimeStampParanoid } from "../utils/modelsUtils";
import AdvancedUser from "./advancedUser";

export enum PermissionLevel {
    BasicUser = 0,
    Owner = 99
}

@Entity({ name: "users" })
export default class User extends TimeStampParanoid {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nickname!: string;

    @Column()
    email!: string;

    @Column({ length: 20, unique: true })
    phone!: string;

    @Column({ nullable: true })
    fullName!: string;

    @Column()
    password!: string;

    @Column("smallint", { default: 0, select: false })
    permissionLevel!: PermissionLevel; 
    //NOTE: Caution with the injections of this attribute in controller 
    //TODO: find a way to prevent injections of this with typeorm

    @OneToOne(() => User, user => user.advancedUser, { nullable: true })
    advancedUser!: AdvancedUser | null;
}
