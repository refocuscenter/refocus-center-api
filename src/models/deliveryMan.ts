import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import Address from './address'

@Entity({ name: "delivery_people" })
export class DeliveryMan {

    @PrimaryGeneratedColumn()
    id!: number;

}
