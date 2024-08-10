import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail.service';
import { Public, ResponseMessage } from 'src/decorator/customize';
import { MailerService } from '@nestjs-modules/mailer';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import {
  Subscriber,
  SubscriberDocument,
} from 'src/subscribers/schemas/subscriber.schema';
import { Job, JobDocument } from 'src/jobs/schemas/job.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Cron } from '@nestjs/schedule';

@Controller('mail')
export class MailController {
  constructor(
    private readonly mailService: MailService,
    private mailerService: MailerService,
    @InjectModel(Subscriber.name)
    private subscriberModel: SoftDeleteModel<SubscriberDocument>,
    @InjectModel(Job.name)
    private jobModel: SoftDeleteModel<JobDocument>,
  ) {}
  @Get()
  @Public()
  @ResponseMessage('Đã gửi email')
  @Cron("7 0 0 * * 0")
  async handleTestEmail() {
    const jobs = [
      {
        name: 'IT 1company',
        company: 'ki11et',
        salary: '999',
        skills: ['React,Node.JS'],
      },
      {
        name: 'IT c1ompany',
        company: 'ki1et',
        salary: '9919',
        skills: ['React,Nest.JS'],
      },
    ];
    const subscribers = await this.subscriberModel.find({});
    for (const subs of subscribers) {
      const subsSkills = subs.skills;
      const jobWithMatchingSkills = await this.jobModel.find({
        skills: { $in: subsSkills },
      });
      if (jobWithMatchingSkills?.length) {
        const jobs = jobWithMatchingSkills.map((item) => {
          return {
            name: item.name,
            company: item.company,
            salary: `${item.salary}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
            skills: item.skills,
          };
        });
        await this.mailerService.sendMail({
          to: 'nguyenvutankiet17012002@gmail.com',
          from: '"Kiet Dev" <support@example.com>', // override default from
          subject: 'Email Company',
          template: 'job',
          context: {
            receiver: subs.name,
            jobs: jobs,
          },
        });
      }
    }
  }
}
