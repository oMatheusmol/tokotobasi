import { Express, Request, Response, NextFunction } from 'express';

export const setupAsyncErrors = (app: Express): void => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    /* istanbul ignore next */
    if (!error) {
      return next();
    }

    if (process.env.DEBUG === '1') {
      console.error(error);
    }

    return res.status(error.statusCode).json({
      error: error.name,
      message: error.message,
      statusCode: error.statusCode,
      messages: error.messages,
    });
  });
};            
