import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { IRecognitionTerm } from "../../domain/model/recognitionTerm";
import { Offer } from "./offer";

@Entity({ name: "recognition_terms" })
export class RecognitionTerm implements IRecognitionTerm {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	term!: string;

	@ManyToOne(() => Offer, (prod) => prod.recognitionTerm)
	@JoinColumn()
	product!: Offer;
}
