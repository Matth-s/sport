import { z } from "zod";

export const forgotPasswordSchema = z.object({
  email: z.email({
    error: "Email invalide",
  }),
});

export type forgotPasswordType = z.infer<typeof forgotPasswordSchema>;
