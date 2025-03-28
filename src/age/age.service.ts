import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAgeDto } from './dto/create-age.dto';
import { UpdateAgeDto } from './dto/update-age.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AgeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAgeDto: CreateAgeDto) {
    const age = await this.prisma.age.create({
      data: { ...createAgeDto },
    });
    return age;
  }

  async findAll() {
    const ages = await this.prisma.age.findMany();
    if (!ages) {
      throw new NotFoundException('Ages not found');
    }
    return ages;
  }

  async findOne(id: string) {
    const age = await this.prisma.age.findUnique({
      where: { id },
    });
    if (!age) {
      throw new NotFoundException('Age not found');
    }
    return age;
  }

  async update(id: string, updateAgeDto: UpdateAgeDto) {
    const ageExists = await this.prisma.age.findUnique({
      where: { id },
    });
    if (!ageExists) {
      throw new NotFoundException('Age not found');
    }
    const age = await this.prisma.age.update({
      where: { id },
      data: updateAgeDto,
    });
    return age;
  }

  async remove(id: string) {
    const ageExists = await this.prisma.age.findUnique({
      where: { id },
    });
    if (!ageExists) {
      throw new NotFoundException('Age not found');
    }
    await this.prisma.age.delete({ where: { id } });
  }
}
