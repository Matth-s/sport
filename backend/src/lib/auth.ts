import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import prisma from './prisma';

//better auth plugins
import { username } from 'better-auth/plugins';
import { comparePassword, hashPassword } from './bcrypt';
import { getUserByName } from '../data/user-data';

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,

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
  },

  emailVerification: {
    sendOnSignIn: true,
    sendOnSignUp: true,
    sendVerificationEmail: async ({ token, user }) => {
      return console.log('send email', token, user);
    },
  },

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
