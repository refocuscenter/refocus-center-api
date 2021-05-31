import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { SignedPlan } from "./signedPlan";
import { UnitStore } from "./unitStore";

@Entity({ name: "store_highlights" })
export class StoreHighlight {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column("bytea")
	bannerImage!: Buffer;

	@Column()
	title!: String;

	@ManyToOne(() => UnitStore, (uStore) => uStore.storeHighlights)
	@JoinColumn()
	unitStore!: UnitStore;

	@ManyToOne(() => SignedPlan, (sig) => sig.storeHighlight)
	@JoinColumn()
	signedPlan!: SignedPlan | null;
}
