import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail.service';
import { Public, ResponseMessage } from 'src/decorator/customize';
import { MailerService } from '@nestjs-modules/mailer';

@Controller('mail')
export class MailController {
  constructor(
    private readonly mailService: MailService,
    private mailerService: MailerService,
  ) {}
  @Get()
  @Public()
  @ResponseMessage('Đã gửi email')
  async handleTestEmail() {
    await this.mailerService.sendMail({
      to: 'langla76@gmail.com',
      from: '"Kiet Dev" <support@example.com>', // override default from
      subject: 'Email Company',
      template: "job"
    });
  }
}
