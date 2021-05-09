import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./product";
import { UnitStore } from "./unitStore";

@Entity({ name: "supplied_products" })
export class SuppliedProduct {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column("bigint")
	value!: number;

	@Column()
	stockAmount!: number;

	@ManyToOne(() => UnitStore, (model) => model.suppliedProducts)
	@JoinColumn()
	unitStore!: UnitStore;

	@ManyToOne(() => Product, (model) => model.suppliedProducts)
	@JoinColumn()
	product!: Product;
}
