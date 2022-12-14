import { Injectable } from '@nestjs/common';
import { Notification } from 'src/application/entities/notification.entity';
import { NotificationsRepository } from '../../../../application/repositories/notifications.repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const { id, category, content, recipientId, readAt, createdAt } =
      notification;

    await this.prismaService.notification.create({
      data: {
        id,
        category,
        content: content.value,
        recipientId,
        readAt,
        createdAt,
      },
    });
  }
}
