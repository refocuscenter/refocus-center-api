import { ISignedPlan } from "./signedPlan";

export enum SubscriptionType {
	WEEKLY,
	MONTHLY,
	QUARTERLY,
	YEARLY,
}

export interface IHighlightsPlan {
	id: number;

	description: string | null;

	value: number;

	subscriptionType: SubscriptionType;

	signedPlan: ISignedPlan[] | null;
}
