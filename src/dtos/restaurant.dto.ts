import { IsNotEmpty, IsString } from "class-validator";

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

  @IsString()
  @IsNotEmpty()
  public deliveryPrice: number;

  @IsString()
  @IsNotEmpty()
  public minimumOnlinePrice: number;
}