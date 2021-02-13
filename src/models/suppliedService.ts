import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { UnitStore } from "./unitStore";

@Entity({ name: "supplied_services" })
export class SuppliedService {
    
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column("bigint")
    value!: number;

    @Column("text")
    description!: string;

    @Column("bytea")
    presentationImage!: Buffer;

    @ManyToOne(() => UnitStore, model => model.suppliedServices)
    unitStore!: UnitStore;
}
