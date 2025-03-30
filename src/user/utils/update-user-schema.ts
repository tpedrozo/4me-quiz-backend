import { z } from 'zod';

export const updateUserSchema = z.object({
  id: z.string(),
  gender: z.string(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  zipCode: z.string(),
  address: z.string(),
  age: z.string(),
  complementary: z.array(z.string()),
  goal: z.array(z.string()),
  hairType: z.string(),
  hairConsider: z.string(),
  hairLength: z.string(),
  washFrequency: z.string(),
  chemicalProcess: z.string(),
  hairLoss: z.string(),
  yourHairAre: z.string(),
  dandruff: z.string(),
  frizzType: z.string(),
  authKey: z.string(),
});

export type UpdateUserSchema = z.infer<typeof updateUserSchema>;
