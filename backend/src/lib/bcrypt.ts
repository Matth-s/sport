import * as bcrypt from 'bcryptjs';

export const hashPassword = async (
  password: string
): Promise<string> => {
  try {
    const hashedPassword = await bcrypt.hash(password, 14);

    return hashedPassword;
  } catch {
    throw new Error('Une erreur est survenue');
  }
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  try {
    const correctPassword = await bcrypt.compare(
      password,
      hashedPassword
    );

    return correctPassword;
  } catch {
    throw new Error('Une erreur est survenue');
  }
};
