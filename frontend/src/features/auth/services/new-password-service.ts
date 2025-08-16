import { authClient } from "@/lib/better-auth";
import { newPasswordType } from "./new-password-schema";
import { formatBetterAuthError } from "@/helpers/better-auth-error-helper";

export const newPasswordService = async (formData: newPasswordType) => {
  const { password, token } = formData;

  const { error, data } = await authClient.resetPassword({
    newPassword: password,
    token,
  });

  if (error) {
    console.log(error);

    return {
      error: formatBetterAuthError(error.code ?? ""),
    };
  }

  return {
    success: "Le mot de passe a été modifié avec succès",
  };
};
