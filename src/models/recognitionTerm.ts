import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { Offer } from "./offer";

@Entity({ name: "recognition_terms" })
export class RecognitionTerm {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	term!: string;

	@ManyToOne(() => Offer, (prod) => prod.recognitionTerm)
	@JoinColumn()
	product!: Offer;
}
