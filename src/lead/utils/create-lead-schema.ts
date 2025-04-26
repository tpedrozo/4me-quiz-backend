import { z } from 'zod';

export const createLeadSchema = z.object({
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
  chemicalProcess: z.array(z.string()),
  hairLoss: z.string(),
  yourWireAre: z.string(),
  dandruff: z.string(),
  frizzType: z.string(),
  authKey: z.string(),
  complement: z.string().optional(),
  recommendedProducts: z.array(z.string()),
  recommendedShops: z.array(z.string()),
});

export type CreateLeadSchema = z.infer<typeof createLeadSchema>;
