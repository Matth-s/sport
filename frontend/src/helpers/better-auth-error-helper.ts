export const formatBetterAuthError = (code: string): string => {
  let message;

  switch (code) {
    case 'USERNAME_IS_ALREADY_TAKEN_PLEASE_TRY_ANOTHER':
      message = "Ce nom d'utilisateur est déjà utilisé";
      break;

    case 'USER_ALREADY_EXISTS':
      message = 'Cet email est déjà utilisé';
      break;

    case 'USERNAME_IS_INVALID':
      message = "Ce nom d'utilisateur est déjà utilisé";
      break;

    default:
      message = 'Une erreur inconnue est survenue';
  }

  return message;
};
