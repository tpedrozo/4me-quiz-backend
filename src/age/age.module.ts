import { Module } from '@nestjs/common';
import { AgeService } from './age.service';
import { AgeController } from './age.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AgeController],
  providers: [AgeService, PrismaService],
})
export class AgeModule {}
