import dotenv from 'dotenv';

dotenv.config();

const port = process.env.BACKEND_PORT;
const betterAuthSecret = process.env.BETTER_AUTH_SECRET;
const frontendUrl = process.env.FRONTEND_URL;
const RESEND_KEY = process.env.RESEND_API_KEY;

export { port, betterAuthSecret, frontendUrl, RESEND_KEY };
