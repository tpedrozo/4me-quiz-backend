import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './utils/user.schema';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create(user: User) {
    console.log('user', user);
    // const validation = userSchema.safeParse(user);
    // if (!validation.success) {
    //   const formattedErrors = validation.error.errors.map((err) => ({
    //     path: err.path.join('.'),
    //     message: err.message,
    //   }));
    //   zodBadRequestException({ error: { errors: formattedErrors } });
    // }
    // await this.prisma.user.create({ data:  });
    return { message: 'Registration Successful' };
  }
}
