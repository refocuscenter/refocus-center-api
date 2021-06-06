import { IOffer } from "./offer";

export interface ICategory {
	id: number;

	name: string;

	products: IOffer[] | null;
}
