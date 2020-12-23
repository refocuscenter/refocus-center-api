import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";

/*
TODO: test this constraint
//CREATE UNIQUE INDEX uq_users_phone
//ON dbo.users(phoneAreaCode, phone);
*/

@Unique("uq_users_phone", ["phone", "phoneAreaCode"])
@Entity({ name: "users" })
export default class User {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column()
    nickname!: string;

    @Column()
    email!: string;

    @Column()
    phone!: number;

    @Column()
    phoneAreaCode!: number; //(Ex.: 55021) DDD

    @Column({ nullable: true })
    fullName!: string;

    @Column()
    password!: string;
}
