import { z } from 'zod';

export const newsletterSchema = z.object({
  email: z.string().email('Invalid email format').nonempty('Email is required'),
});

export type NewsletterSchema = z.infer<typeof newsletterSchema>;
