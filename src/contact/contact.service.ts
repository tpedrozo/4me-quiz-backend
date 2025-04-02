import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { contactSchema } from './utils/create-contact-schema';
import { zodBadRequestException } from 'src/shared/utils/zod-bad-request-exeption';

@Injectable()
export class ContactService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createContactDto: CreateContactDto) {
    const isContactValid = contactSchema.safeParse(createContactDto);

    if (!isContactValid.success) {
      zodBadRequestException({ error: isContactValid });
    }
    const exists = await this.prisma.contact.findUnique({
      where: {
        email: createContactDto.email,
      },
    });

    if (exists) {
      throw new ConflictException('Contact already exists');
    }

    const contact = await this.prisma.contact.create({
      data: createContactDto,
    });

    return contact;
  }

  async findAll() {
    const contacts = await this.prisma.contact.findMany();

    return contacts;
  }

  async findOne(id: string) {
    const exists = await this.prisma.contact.findUnique({
      where: {
        id,
      },
    });

    if (!exists) {
      throw new NotFoundException('Contact not found');
    }

    return exists;
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    const exists = await this.prisma.contact.findUnique({
      where: {
        id,
      },
    });

    if (!exists) {
      throw new NotFoundException('Contact not found');
    }

    const isContactValid = contactSchema.safeParse(updateContactDto);

    if (!isContactValid.success) {
      zodBadRequestException({ error: isContactValid });
    }

    const contact = await this.prisma.contact.update({
      where: {
        id,
      },
      data: updateContactDto,
    });

    return contact;
  }

  async remove(id: string) {
    const exists = await this.prisma.contact.findUnique({
      where: {
        id,
      },
    });

    if (!exists) {
      throw new NotFoundException('Contact not found');
    }

    const contact = await this.prisma.contact.delete({
      where: { id },
    });

    return contact;
  }
}
