import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateMenuDTO {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsNumber()
  @IsNotEmpty()
  public restaurant_id: number
  
}