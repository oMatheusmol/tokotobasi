module.exports = {
  get: function (resource) {
    return `import { ResponseHandler, ResponseModel } from '../../infrastructure/express/adapters/express-route-adapter';

export class GenericSuccessResponse<T> implements ResponseHandler<T> {
  public async response(body: T): Promise<ResponseModel<T>> {
    return {
      statusCode: 200,
      body,
    };
  }
}    
`;
  },
};
