import dotenv from 'dotenv';

dotenv.config();

const port = process.env.BACKEND_PORT;

export { port };
