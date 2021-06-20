import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { IStoreHighlight } from "../../domain/model/storeHighlight";
import { SignedPlan } from "./signedPlan";
import { UnitStore } from "./unitStore";

@Entity({ name: "store_highlights" })
export class StoreHighlight implements IStoreHighlight {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column("bytea")
	bannerImage!: Buffer;

	@Column()
	title!: string;

	@ManyToOne(() => UnitStore, (uStore) => uStore.storeHighlights)
	@JoinColumn()
	unitStore!: UnitStore;

	@ManyToOne(() => SignedPlan, (sig) => sig.storeHighlight)
	@JoinColumn()
	signedPlan!: SignedPlan | null;
}
