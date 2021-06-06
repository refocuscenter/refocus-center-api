import { IAddress } from "./address";
import { IDeliveryMan } from "./deliveryMan";
import { IPurchase } from "./purchase";

export interface IDelivery {
	id: number;

	scheduledDateTime: Date;

	value: number;

	deliveryAddress: IAddress;

	deliveryMan: IDeliveryMan;

	purchase: IPurchase;
}
