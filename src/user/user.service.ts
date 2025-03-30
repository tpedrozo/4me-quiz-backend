import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { createUserSchema } from './utils/create-user-schema';
import { zodBadRequestException } from '../shared/utils/zod-bad-request-exeption';
import { PrismaService } from 'src/prisma/prisma.service';
import { updateUserSchema } from './utils/update-user-schema';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const isValid = createUserSchema.safeParse(createUserDto);

    if (!isValid.success) {
      zodBadRequestException({ error: isValid });
    }

    const userExists = (await this.prisma.user.findUnique({
      where: {
        email: createUserDto.email,
      },
    })) as UpdateUserDto;

    if (userExists) {
      await this.update(userExists.id, userExists);
    }

    const user = await this.prisma.user.create({
      data: createUserDto,
    });

    return user;
  }

  async findAll() {
    const users = await this.prisma.user.findMany();

    return users;
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const isValid = updateUserSchema.safeParse(updateUserDto);

    if (!isValid.success) {
      zodBadRequestException({ error: isValid });
    }

    return this.prisma.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  async remove(id: string) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!userExists) {
      throw new NotFoundException('User not found');
    }

    await this.prisma.user.delete({
      where: { id },
    });
  }
}
