import { IsArray, IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";

export class OrderDTO {
  @IsNumber()
  @IsNotEmpty()
  total: number;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  payment: string;

  @IsNotEmpty()
  products: object[];
  
}