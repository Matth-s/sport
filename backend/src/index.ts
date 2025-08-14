import express from 'express';
import { betterAuthUrl, port } from './lib/env-config';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './lib/auth';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

app.all('/api/auth/*splat', toNodeHandler(auth));

app.listen(port, () => {
  console.log(`le serveur écoute sur le port ${port}`);
});
