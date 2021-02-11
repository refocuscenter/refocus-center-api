import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product";

@Entity({ name: "recognition_terms" })
export class RecognitionTerm {
    
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    term!: string;

    @ManyToOne(() => Product, prod => prod.recognitionTerm)
    @JoinColumn()
    product!: Product;

}
