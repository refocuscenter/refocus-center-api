import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "suppliedProducts" })
export class SuppliedProduct {
    
    @PrimaryGeneratedColumn()
    id!: number;

    @Column("bigint")
    value!: number;

    @Column()
    stockAmount!: number;

}
