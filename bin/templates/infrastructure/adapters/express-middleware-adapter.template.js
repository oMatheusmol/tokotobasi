module.exports = {
  get: function (resource) {
    return `import { NextFunction, Request, Response } from 'express';
import { DefaultApplicationError } from '../../../common/errors/default-application-error';
import { RequestModel } from './express-route-adapter';

export const expressMiddlewareAdapter = (middleware: Middleware) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    return Promise.resolve(
      middleware.handleRequest({
        query: request.query,
        params: request.params,
        body: request.body,
        headers: request.headers,
        method: request.method,
      }),
    )
      .then(() => {
        return next();
      })
      .catch((error: DefaultApplicationError) => {
        return next(error);
      });
  };
};

export interface Middleware {
  handleRequest(requestModel: MiddlewareRequestModel): Promise<void> | never;
}

export interface MiddlewareRequestModel extends RequestModel {
  method?: string;
} 
`;
  },
};
