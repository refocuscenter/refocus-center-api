import {
	Column,
	Entity,
	JoinTable,
	ManyToMany,
	PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./product";

@Entity({ name: "categories" })
export class Category {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	name!: string;

	@ManyToMany(() => Product, (prod) => prod.categories)
	@JoinTable()
	products!: Product[] | null;
}
