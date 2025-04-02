import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().nonempty('Name is required'),
  email: z.string().email('Invalid email format').nonempty('Email is required'),
  message: z.string().nonempty('Message is required'),
});

export type ContactSchema = z.infer<typeof contactSchema>;
