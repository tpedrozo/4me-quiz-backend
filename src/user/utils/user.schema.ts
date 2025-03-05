import { z } from 'zod';

const userSchema = z.object({
  id: z.string().uuid().optional(),
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
  yourWireAre: z.string(),
  dandruff: z.string(),
  frizzType: z.string(),
  authKey: z.string(),
});

export default userSchema;

export type User = z.infer<typeof userSchema>;
