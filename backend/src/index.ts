import express from 'express';
import { frontendUrl, port } from './lib/env-config';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './lib/auth';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
app.use(helmet());

app.use(
  cors({
    origin: frontendUrl,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

app.all('/api/auth/*splat', toNodeHandler(auth));

app.listen(port, () => {
  console.log(`le serveur écoute sur le port ${port}`);
});
