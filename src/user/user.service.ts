import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import userSchema, { User } from './utils/user.schema';
import { zodBadRequestException } from 'src/shared/utils/zod-bad-request-exeption';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(user: User) {
    const validation = userSchema.safeParse(user);
    if (!validation.success) {
      const formattedErrors = validation.error.errors.map((err) => ({
        path: err.path.join('.'),
        message: err.message,
      }));
      zodBadRequestException({ error: { errors: formattedErrors } });
    }
    await this.prisma.user.create({ data: user });
    return { message: 'Registration Successful' };
  }
}
