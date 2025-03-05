import { BadRequestException } from '@nestjs/common';

export const zodBadRequestException = (validation: {
  error: { errors: { path: string; message: string }[] };
}): BadRequestException => {
  throw new BadRequestException(
    validation.error.errors
      .map((error) => `${error.path}: ${error.message}`)
      .join(', '),
  );
};
