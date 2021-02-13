import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product";
import { Purchase } from "./purchase";
import { SignedPlan } from "./signedPlan";
import { SuppliedService } from "./suppliedService";
import { UnitStore } from "./unitStore";

/**
 * Produtos de extrato
 */
@Entity({ name: "statement_items" })
export class StatementItem {
    
    @PrimaryGeneratedColumn()
    id!: number;

    @Column("bigint")
    value!: number;

    @Column()
    amount!: number;

    @Column()
    name!: string;

    @Column("text")
    description!: string;

    @ManyToOne(() => Purchase, purchase => purchase.statementItems)
    @JoinColumn()
    purchase!: Purchase

    @ManyToOne(() => UnitStore)
    @JoinColumn()
    unitStore!: UnitStore

    @ManyToOne(() => Product)
    @JoinColumn()
    product!: Product | null

    @ManyToOne(() => SuppliedService)
    @JoinColumn()
    suppliedService!: SuppliedService | null

    @ManyToOne(() => SignedPlan)
    @JoinColumn()
    signedPlan!: SignedPlan | null;
}
