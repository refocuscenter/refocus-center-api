import {
	Column,
	Entity,
	JoinTable,
	ManyToMany,
	PrimaryGeneratedColumn,
} from "typeorm";
import { Offer } from "./offer";

@Entity({ name: "categories" })
export class Category {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	name!: string;

	@ManyToMany(() => Offer, (prod) => prod.categories)
	@JoinTable()
	products!: Offer[] | null;
}
