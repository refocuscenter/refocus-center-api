import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TimeStampParanoid } from "../utils/modelsUtils";
import { HighlightsPlan } from "./highlightPlan";
import { Purchase } from "./purchase";
import { Shopkeeper } from "./shopkeeper";
import { StoreHighlight } from "./storeHighlight";

@Entity({ name: "signed_plans" })
export class SignedPlan extends TimeStampParanoid {
    
    @PrimaryGeneratedColumn()
    id!: number;

    @Column("bigint")
    contractedValue!: number;

    //TODO
    shopkeeper!: Shopkeeper
    highlightPlan!: HighlightsPlan
    storeHighlight!: StoreHighlight[] | null
    purchase!: Purchase[]
}
