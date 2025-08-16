import { authClient } from "@/lib/better-auth";
import { forgotPasswordType } from "../schemas/forgot-password-schema";
import { formatBetterAuthError } from "@/helpers/better-auth-error-helper";

export const forgotPasswordService = async (formData: forgotPasswordType) => {
  const { error } = await authClient.requestPasswordReset(formData);

  if (error) {
    return {
      error: formatBetterAuthError(error.code ?? ""),
    };
  }

  return {
    success: "Un email vous a été envoyé",
  };
};
