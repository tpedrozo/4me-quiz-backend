import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';
import { createLeadSchema } from './utils/create-lead-schema';
import { zodBadRequestException } from '../shared/utils/zod-bad-request-exeption';
import { PrismaService } from 'src/prisma/prisma.service';
import { updateLeadSchema } from './utils/update-lead-schema';

@Injectable()
export class LeadService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLeadDto: CreateLeadDto) {
    const isValid = createLeadSchema.safeParse(createLeadDto);

    if (!isValid.success) {
      zodBadRequestException({ error: isValid });
    }

    const leadExists = await this.prisma.lead.findUnique({
      where: {
        email: createLeadDto.email,
      },
    });

    if (leadExists) {
      throw new ConflictException('Lead already exists');
    }

    const lead = await this.prisma.lead.create({
      data: createLeadDto,
    });

    return lead;
  }

  async findAll() {
    const leads = await this.prisma.lead.findMany();

    return leads;
  }

  async findOne(id: string) {
    const lead = await this.prisma.lead.findUnique({
      where: {
        id,
      },
    });

    if (!lead) {
      throw new NotFoundException('Lead not found');
    }

    return lead;
  }

  async update(id: string, updateLeadDto: UpdateLeadDto) {
    const isValid = updateLeadSchema.safeParse(updateLeadDto);

    if (!isValid.success) {
      zodBadRequestException({ error: isValid });
    }

    const lead = await this.prisma.lead.update({
      where: {
        id,
      },
      data: updateLeadDto,
    });

    return lead;
  }

  async remove(id: string) {
    const lead = await this.prisma.lead.delete({
      where: {
        id,
      },
    });

    return lead;
  }
}
