export const formatBetterAuthError = (code: string): string => {
  let message;

  switch (code) {
    case "USERNAME_IS_ALREADY_TAKEN_PLEASE_TRY_ANOTHER":
      message = "Ce nom d'utilisateur est déjà utilisé";
      break;

    case "USER_ALREADY_EXISTS":
      message = "Cet email est déjà utilisé";
      break;

    case "USERNAME_IS_INVALID":
      message = "Ce nom d'utilisateur est déjà utilisé";
      break;

    case "INVALID_USERNAME_OR_PASSWORD":
      message = "Nom d'utilisateur ou de passe invalide";
      break;

    case "INVALID_EMAIL_OR_PASSWORD":
      message = "Email ou de passe invalide";
      break;

    case "EMAIL_NOT_VERIFIED":
      message = "Veuillez confirmer votre email";
      break;

    case "INVALID_TOKEN":
      message = "Token invalide";
      break;

    default:
      message = "Une erreur inconnue est survenue";
  }

  return message;
};
