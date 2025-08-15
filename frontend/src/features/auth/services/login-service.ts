import { authClient } from '@/lib/better-auth';
import { loginType } from '../schemas/login-schema';
import { formatBetterAuthError } from '@/helpers/better-auth-error-helper';

export const loginService = async (credentials: loginType) => {
  const { identifier, password } = credentials;

  if (identifier.includes('@')) {
    //connexion avec mot de passe

    const { error } = await authClient.signIn.email({
      email: identifier,
      password,
    });

    if (error) {
      return {
        error: formatBetterAuthError(error.code ?? ''),
      };
    }
    return {
      success: true,
    };
  } else {
    //connexion avec nom d'utilisateur

    const { error } = await authClient.signIn.username({
      username: identifier,
      password,
    });

    if (error) {
      return {
        error: formatBetterAuthError(error.code ?? ''),
      };
    }

    return {
      success: true,
    };
  }
};
