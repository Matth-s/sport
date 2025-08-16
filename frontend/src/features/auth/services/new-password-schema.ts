import { z } from "zod";

export const newPasswordSchema = z
  .object({
    token: z.string(),
    password: z
      .string()
      .min(8, {
        error: "Le mot de passe doit contenir au-moins 8 caractères",
      })
      .max(128, {
        error: "Le mot de passe doit contenir moins de 128 caractères",
      }),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
  });

export type newPasswordType = z.infer<typeof newPasswordSchema>;
