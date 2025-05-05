import { IsString, IsNumber, IsOptional, IsUrl } from 'class-validator';

export class CreateProductDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  slug: string;

  @IsNumber()
  price: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsUrl()
  @IsOptional()
  imageUrl?: string;
}
