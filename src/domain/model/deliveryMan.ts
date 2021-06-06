import { IDelivery } from "./delivery";
import { IUserDetails } from "./userDetails";

export interface IDeliveryMan {
	id: number;

	deliveries: IDelivery[] | null;

	userDetails: IUserDetails;
}
