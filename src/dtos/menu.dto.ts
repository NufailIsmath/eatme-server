import { IsNotEmpty, IsString } from "class-validator";


export class CreateMenuDTO {
  @IsString()
  @IsNotEmpty()
  public name: string;
  
}