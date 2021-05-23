import {
	Column,
	Entity,
	ManyToMany,
	OneToMany,
	PrimaryGeneratedColumn,
} from "typeorm";
import { Category } from "./category";
import { RecognitionTerm } from "./recognitionTerm";
import { SuppliedOffer } from "./suppliedOffer";

@Entity({ name: "offers" })
export class Offer {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	name!: string;

	@Column("bytea")
	presentationImage!: Buffer;

	@Column("text")
	description!: string;

	@ManyToMany(() => Category, (categ) => categ.products)
	categories!: Category[];

	@OneToMany(() => SuppliedOffer, (sup) => sup.offer)
	suppliedOffers!: SuppliedOffer[] | null;

	@OneToMany(() => RecognitionTerm, (recog) => recog.product)
	recognitionTerm!: RecognitionTerm[] | null;
}
