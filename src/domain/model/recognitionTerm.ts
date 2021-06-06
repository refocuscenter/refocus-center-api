import { IOffer } from "./offer";

export interface IRecognitionTerm {
	id: number;

	term: string;

	product: IOffer;
}
