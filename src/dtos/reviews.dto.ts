import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateReviewDTO {
  @IsNumber()
  @IsNotEmpty()
  public rating: number;

  @IsString()
  @IsNotEmpty()
  public comment: string;

  @IsNumber()
  @IsNotEmpty()
  public dish_id: number;
}