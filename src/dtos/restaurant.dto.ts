import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateRestaurantDTO {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public description: string;

  @IsString()
  @IsNotEmpty()
  public location: string;

  @IsString()
  @IsNotEmpty()
  public openingTime: string;

  @IsString()
  @IsNotEmpty()
  public closingTime: string;

  @IsNumber()
  @IsNotEmpty()
  public deliveryPrice: number;

  @IsNumber()
  @IsNotEmpty()
  public minimumOnlinePrice: number;
}