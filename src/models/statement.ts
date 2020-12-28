import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product";
import { Purchase } from "./purchase";
import { UnitStore } from "./unitStore";

/**
 * Produtos de extrato
 */
@Entity({ name: "statementProducts" })
export class StatementProduct {
    
    @PrimaryGeneratedColumn()
    id!: number;

    @Column("bigint")
    value!: number;

    @Column()
    amount!: number;

    //TODO
    purchase!: Purchase
    unitStore!: UnitStore
    product!: Product
}
