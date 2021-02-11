import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category";
import { RecognitionTerm } from "./recognitionTerm";
import { SuppliedProduct } from "./suppliedProduct";

@Entity({ name: "products" })
export class Product {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column("varchar", { nullable: true })
    barCode!: string | null;

    @Column()
    name!: string;

    @Column("bytea")
    image!: Buffer;

    @Column("text")
    description!: string;

    @ManyToMany(() => Category, categ => categ.products)
    categories!: Category[]
    
    @OneToMany(() => SuppliedProduct, sup => sup.product)
    suppliedProducts!: SuppliedProduct[] | null

    @OneToMany(() => RecognitionTerm, recog => recog.product)
    recognitionTerm!: RecognitionTerm[] | null
}
