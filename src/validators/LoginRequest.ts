import { IsEmail, IsOptional, Length } from "class-validator";

export class LoginRequest {
    @IsOptional()
    phone!: string;

    @IsEmail()
    @IsOptional()
    email!: string;  
    
    password!: string;
  }