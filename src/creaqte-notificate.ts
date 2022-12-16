import { IsNotEmpty, IsUUID, Length } from "class-validator";

export class CreateNotificateBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;
  
  @IsNotEmpty()
  @Length(5, 20)
  category: string;
}