import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateNewsletterDto } from './dto/create-newsletter.dto';
import { UpdateNewsletterDto } from './dto/update-newsletter.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { newsletterSchema } from './utils/create-newsletter-schema';
import { zodBadRequestException } from '../shared/utils/zod-bad-request-exeption';

@Injectable()
export class NewsletterService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createNewsletterDto: CreateNewsletterDto) {
    const exists = await this.prisma.newsletter.findUnique({
      where: { email: createNewsletterDto.email },
    });

    if (exists) {
      throw new BadRequestException('Email already exists');
    }
    const isValid = newsletterSchema.safeParse(createNewsletterDto);

    if (!isValid.success) {
      zodBadRequestException({ error: isValid });
    }

    const newsletter = await this.prisma.newsletter.create({
      data: createNewsletterDto,
    });

    return newsletter;
  }

  async findAll() {
    const newsletters = await this.prisma.newsletter.findMany();

    return newsletters;
  }

  async findOne(id: string) {
    const exists = await this.prisma.newsletter.findUnique({
      where: { id },
    });

    if (!exists) {
      throw new NotFoundException('Newsletter not found');
    }

    const newsletter = await this.prisma.newsletter.findUnique({
      where: { id },
    });

    return newsletter;
  }

  async update(id: string, updateNewsletterDto: UpdateNewsletterDto) {
    const exists = await this.prisma.newsletter.findUnique({
      where: { id },
    });

    if (!exists) {
      throw new NotFoundException('Newsletter not found');
    }

    const isValid = newsletterSchema.safeParse(updateNewsletterDto);

    if (!isValid.success) {
      zodBadRequestException({ error: isValid });
    }

    const newsletter = await this.prisma.newsletter.update({
      where: { id },
      data: updateNewsletterDto,
    });

    return newsletter;
  }

  async remove(id: string) {
    const exists = await this.prisma.newsletter.findUnique({
      where: { id },
    });

    if (!exists) {
      throw new NotFoundException('Newsletter not found');
    }

    await this.prisma.newsletter.delete({
      where: { id },
    });

    return { message: 'Newsletter deleted successfully' };
  }
}
