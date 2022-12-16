import { Injectable } from "@nestjs/common";
import { MailService } from "./mail.service";

@Injectable()
export class PostmarkMail implements MailService {
  sendmail(): string {
    return 'Postmark mail'
  }
}