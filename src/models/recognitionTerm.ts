import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "recognition_terms" })
export class RecognitionTerm {
    
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    term!: string;

}
