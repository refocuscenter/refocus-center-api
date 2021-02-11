import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToOne, JoinColumn } from "typeorm";
import { TimeStampParanoid } from "../utils/modelsUtils";
import { AdvancedUser } from "./advancedUser";

//TALVEZ EU DEVA TIRAR ISSO, N FAZ SENTIDO, JÁ DA PRA SABER QUEM É QUEM SÓ PELO FATO DE EXISTIR OU NÃO RELAÇÃO
//OU TALVEZ ISSO DEVA FICAR EM UM SERVIÇO PARA O FRONT SABER O QUE ELE É
export enum PermissionLevel {
    /**
     * Usuário comum, sem dados suficientes para compra
     */
    BasicUser = 0,

    /**
     * Usuário avançado (comprador), possui dados suficientes para realizar compras 
     */
    AdvancedUser = 1,

    /**
     * Usuário lojista
     */
    shopKeeperUser = 2,

    /**
     * Usuário entregador
     */
    deliveryManUser = 3,

    /**
     * Usuário administrador
     */
    Owner = 99
}

@Entity({ name: "users" })
export class User extends TimeStampParanoid {
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
