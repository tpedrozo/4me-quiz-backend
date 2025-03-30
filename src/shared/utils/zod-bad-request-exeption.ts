import { BadRequestException } from '@nestjs/common';
import { SafeParseError } from 'zod';

export const zodBadRequestException = (validation: {
  error: SafeParseError<any>;
}): BadRequestException => {
  throw new BadRequestException(validation.error.error.issues);
};
