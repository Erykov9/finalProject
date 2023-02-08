import { IsNotEmpty } from "class-validator";
import { IsInt, IsString, IsUUID, Length } from "class-validator";
import { Max, Min } from "class-validator";

export class ProductDTO {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsString()
  @Length(5,30)
  name:  string;

  @IsInt()
  @IsNotEmpty()
  @Min(0)
  @Max(99999)
  price: number;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  @Max(5)
  rate: number;

  @IsNotEmpty()
  @IsString()
  image: string;

  @IsNotEmpty()
  @IsString()
  @Length(0,250)
  description: string;
}