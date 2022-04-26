import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/hello', (req: Request, res: Response, next: NextFunction) => {
  res.send('hello express typesciprt');
});

app.listen(port, () => {
  console.log(`
  ################################################
    Server listening on port: ${port}
  ################################################
`);
});