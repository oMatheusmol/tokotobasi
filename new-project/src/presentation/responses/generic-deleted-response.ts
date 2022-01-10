import { ResponseHandler, ResponseModel } from '../../infrastructure/express/adapters/express-route-adapter';

export class GenericDeletedResponse<T> implements ResponseHandler<T> {
  public async response(body: T): Promise<ResponseModel<T>> {
    const responseData = {
      statusCode: 202,
      body,
    };

    return responseData;
  }
}    
