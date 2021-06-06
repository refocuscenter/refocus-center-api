import { ICategory } from "./category";
import { IRecognitionTerm } from "./recognitionTerm";
import { ISuppliedOffer } from "./suppliedOffer";

export interface IOffer {
	id: number;

	name: string;

	presentationImage: Buffer;

	description: string;

	categories: ICategory[];

	suppliedOffers: ISuppliedOffer[] | null;

	recognitionTerm: IRecognitionTerm[] | null;
}
