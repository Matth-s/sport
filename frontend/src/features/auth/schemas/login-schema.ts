import { z } from 'zod';

export const loginSchema = z.object({
  identifier: z.string().min(1, {
    error: "L'identifiant est requis",
  }),
  password: z
    .string()
    .min(1, { error: 'Le mot de passe est requis' }),
});

export type loginType = z.infer<typeof loginSchema>;
