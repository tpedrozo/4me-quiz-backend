import { IsString } from 'class-validator';

export class CreateAgeDto {
  @IsString()
  label: string;
}
