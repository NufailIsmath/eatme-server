import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateDishesDTO {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public description: string;

  @IsNumber()
  @IsNotEmpty()
  public calories: number;

  @IsNumber()
  @IsNotEmpty()
  public price: number;

  @IsString()
  @IsNotEmpty()
  public bannerImage: string;
}