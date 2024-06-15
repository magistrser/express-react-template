import asyncRouter from 'express-promise-router';

export const exampleRouter = asyncRouter();

exampleRouter.get('/example', async (_, res) => {
  res.json({
    'result': 'Hello World',
  });
});
