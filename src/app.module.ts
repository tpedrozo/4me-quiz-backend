import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { LeadModule } from './lead/lead.module';

@Module({
  imports: [LeadModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
