import dotenv from 'dotenv';

dotenv.config();

const port = process.env.BACKEND_PORT;
const betterAuthSecret = process.env.BETTER_AUTH_SECRET;
const betterAuthUrl = process.env.BETTER_AUTH_URL;

export { port, betterAuthSecret, betterAuthUrl };
