import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { LeadModule } from './lead/lead.module';
import { ContactModule } from './contact/contact.module';
import { NewsletterModule } from './newsletter/newsletter.module';

@Module({
  imports: [LeadModule, ContactModule, NewsletterModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
