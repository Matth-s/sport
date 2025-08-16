import { authClient } from "@/lib/better-auth";
import { signupType } from "../schemas/signup-schema";
import { formatBetterAuthError } from "@/helpers/better-auth-error-helper";

export const signupAction = async (credentials: signupType) => {
  const { password, username, email } = credentials;

  const { error } = await authClient.signUp.email({
    username,
    email,
    name: username,
    password,
  });

  if (error) {
    return {
      error: formatBetterAuthError(error.code ?? ""),
    };
  }

  return {
    success: "Un email de confirmation vous a été envoyé",
  };
};
