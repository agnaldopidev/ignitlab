import { Injectable } from '@nestjs/common';
import { MailService } from './mail.service';

@Injectable()
export class SMTPMail implements MailService {
  sendmail(): string {
    return 'SMP Mail'
  }
}