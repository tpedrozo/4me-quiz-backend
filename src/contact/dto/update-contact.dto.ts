import { PartialType } from '@nestjs/mapped-types';
import { CreateContactDto } from './create-contact.dto';
import { IsString } from 'class-validator';

export class UpdateContactDto extends PartialType(CreateContactDto) {
  @IsString()
  id: string;
}
