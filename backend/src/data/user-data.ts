import { User } from '../generated/prisma';
import prisma from '../lib/prisma';

export const getUserByName = async (
  name: string
): Promise<User | null> => {
  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        name,
      },
    });

    return existingUser;
  } catch {
    throw new Error('Une erreur est survenue');
  }
};
