import { IsArray, IsEmail, IsString } from 'class-validator';

export class CreateLeadDto {
  @IsString()
  gender: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  zipCode: string;

  @IsString()
  address: string;

  @IsString()
  number: string;

  @IsString()
  age: string;

  @IsArray()
  @IsString({ each: true })
  complementary: string[];

  @IsArray()
  @IsString({ each: true })
  goal: string[];

  @IsString()
  hairType: string;

  @IsString()
  hairConsider: string;

  @IsString()
  hairLength: string;

  @IsString()
  washFrequency: string;

  @IsArray()
  @IsString({ each: true })
  chemicalProcess: string[];

  @IsString()
  hairLoss: string;

  @IsString()
  yourWireAre: string;

  @IsString()
  dandruff: string;

  @IsString()
  frizzType: string;

  @IsString()
  authKey: string;

  @IsString()
  complement?: string;
}
