import prisma from '../../lib/prisma';

export const updateNameUserService = async ({
  id,
  name,
}: {
  id: string;
  name: string;
}) => {
  try {
    await prisma.user.update({
      where: {
        id,
      },
      data: {
        name: name.replaceAll(' ', '').toLowerCase(),
      },
    });
  } catch {
    throw new Error(
      'Une erreur est survenue lors de la mise à jour de l utilisateur'
    );
  }
};
