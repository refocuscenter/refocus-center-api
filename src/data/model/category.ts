import {
	Column,
	Entity,
	JoinTable,
	ManyToMany,
	PrimaryGeneratedColumn,
} from "typeorm";
import { ICategory } from "../../domain/model/category";
import { Offer } from "./offer";

@Entity({ name: "categories" })
export class Category implements ICategory {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	name!: string;

	@ManyToMany(() => Offer, (prod) => prod.categories)
	@JoinTable()
	products!: Offer[] | null;
}
