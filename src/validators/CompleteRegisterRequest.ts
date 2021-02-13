import { IsDate, isDate, IsEmail, IsOptional, Length } from "class-validator";
import { Person } from "../models/advancedUser";
import { AddressRequest } from "./AddressRequest";

export class CompleteRegisterRequest {
    @Length(1, 25)
    displayName!: string;

    fullName!: string;

    identityDocumentNumber!: string;

    person!: Person;

    birthDate!: Date;

    phone!: string;

    addresses!: AddressRequest[];
}