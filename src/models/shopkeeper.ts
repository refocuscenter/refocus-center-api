import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TimeStampParanoid } from "../utils/modelsUtils";
import AdvancedUser from "./advancedUser";
import { SignedPlan } from "./signedPlan";
import { UnitStore } from "./unitStore";

/**
 * Produtos de extrato
 */
@Entity({ name: "shopkeepers" })
export class Shopkeeper extends TimeStampParanoid {
    
    @PrimaryGeneratedColumn()
    id!: number;

    //TODO
    advancedUser!: AdvancedUser
    unitStore!: UnitStore[]
    signedPlan!: SignedPlan[] | null
}
