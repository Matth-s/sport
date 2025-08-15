import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import prisma from './prisma';

//better auth plugins
import { username } from 'better-auth/plugins';
import { comparePassword, hashPassword } from './bcrypt';
import { getUserByName } from '../data/user-data';
import {
  sendEmailVerification,
  sendPasswordResetEmail,
} from './mail';
import { betterAuthSecret } from './env-config';

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,

    //fonction de hachage
    password: {
      hash: async (password: string): Promise<string> => {
        return await hashPassword(password);
      },
      verify: async ({
        password,
        hash,
      }: {
        password: string;
        hash: string;
      }): Promise<boolean> => {
        return await comparePassword(password, hash);
      },
    },

    sendResetPassword: async ({ user, url }) => {
      await sendPasswordResetEmail({
        email: user.email,
        url,
      });
    },
  },

  emailVerification: {
    sendOnSignIn: true,
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    expiresIn: 15 * 60, // 15 min

    sendVerificationEmail: async ({ user, url }) => {
      return await sendEmailVerification({
        url,
        email: user.email,
      });
    },
  },

  //session
  session: {
    cookieCache: {
      enabled: true,
    },
    freshAge: 60 * 60, // 1 hours
    expiresIn: 60 * 60 * 6, //6 hours
    updateAge: 60 * 60, // 1 hours
  },

  //better auth secret
  secret: betterAuthSecret,

  //plugins
  plugins: [
    username({
      usernameValidator: async (username) => {
        const existingUser = await getUserByName(
          username.replaceAll(' ', '').toLowerCase()
        );

        if (existingUser) {
          return false;
        }

        return true;
      },
    }),
  ],

  advanced: {
    useSecureCookies: true,
    disableCSRFCheck: false,
  },

  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
});
