import express, { Request, Response } from 'express';
import { port } from './lib/env-config';
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: `Requete recue mon gars sur le ports ${port}`,
  });
});

app.listen(port, () => {
  console.log(`le serveur ecoute sur le port ${port}`);
});
