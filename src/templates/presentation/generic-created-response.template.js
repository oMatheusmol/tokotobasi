module.exports = {
  get: function (resource) {
    return `import { ResponseHandler, ResponseModel } from '../../infrastructure/express/adapters/express-route-adapter';

export class GenericCreatedResponse<T> implements ResponseHandler<T> {
  public async response(body: T): Promise<ResponseModel<T>> {
    const responseData = {
      statusCode: 201,
      body,
    };

    return responseData;
  }
}
`;
  },
};
