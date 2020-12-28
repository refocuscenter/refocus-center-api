import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
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

    //TODO
    unitStore!: UnitStore;
    signedPlan!: SignedPlan | null;
}
