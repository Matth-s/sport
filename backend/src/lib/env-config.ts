import dotenv from 'dotenv';

dotenv.config();

const port = process.env.BACKEND_PORT;
const betterAuthSecret = process.env.BETTER_AUTH_SECRET;
const betterAuthUrl = process.env.BETTER_AUTH_URL;
const RESEND_KEY = process.env.RESEND_API_KEY;

export { port, betterAuthSecret, betterAuthUrl, RESEND_KEY };
