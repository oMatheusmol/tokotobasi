import { NextFunction, Request, Response } from 'express';

export const expressRouteAdapter = (controller: Controller) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    return Promise.resolve(
      controller.handleRequest({
        query: request.query,
        params: request.params,
        body: request.body,
        headers: request.headers,
      }),
    )
      .then(controllerResponse => {
        response.status(controllerResponse.statusCode).json(controllerResponse.body);
        return next();
      })
      .catch(error => {
        return next(error);
      });
  };
};

export interface Controller<T = unknown> {
  handleRequest(requestModel: RequestModel): Promise<ResponseModel<T>>;
}

export interface ResponseModel<T> {
  body: T;
  statusCode: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface RequestModel<Body = any, Params = Body, Query = Body, Headers = Body> {
  body?: Body;
  params?: Params;
  query?: Query;
  headers?: Headers;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ResponseHandler<T = any> {
  response(body: T | null): Promise<ResponseModel<T>>;
}
