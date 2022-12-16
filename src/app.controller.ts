import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateNotificateBody } from './creaqte-notificate';
import { PrismaService } from './prisma.service';

@Controller("notification")
export class AppController {
  constructor(private readonly prismaService: PrismaService) { }

  @Get()
  list() {
    return this.prismaService.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificateBody) {
    const { recipientId, category } = body;
    await this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        // content: 'Notificação de amizade',
        category,
        recipientId
      }
    });
  }
}
