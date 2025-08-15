import { z } from 'zod';

export const signupSchema = z
  .object({
    email: z.email({
      error: 'Email invalide',
    }),
    username: z
      .string()
      .trim()
      .min(3, {
        message:
          "Le nom d'utilisateur doit contenir au-moins 3 caractères",
      })
      .max(30, {
        error:
          "Le nom d'utilisateur doit contenir au-moins 30 caractères",
      }),
    password: z
      .string()
      .min(8, {
        error: 'Le mot de passe doit contenir au-moins 8 caractères',
      })
      .max(128, {
        error:
          'Le mot de passe doit contenir moins de 128 caractères',
      }),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'],
  });

export type signupType = z.infer<typeof signupSchema>;
