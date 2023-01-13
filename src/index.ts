import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 4040;
const app: Express = express();


app.get('/', (req: Request, res: Response) => {
  res.send('Artic Commerce is alive!');
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
