import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

}
