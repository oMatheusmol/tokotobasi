import { Controller, RequestModel, ResponseHandler } from '../../../adapters/express-route-adapter';
import { Client } from '../interface/client-interface';
import { FindAllClientsUseCase } from '../interface/find-all-clients-use_case';

type FindAllClientsRequestModel = RequestModel<
  void,
  void,
  {
    order?: 'desc' | 'asc';
    limit?: number;
    offset?: number;
  }
>;

export class FindAllClientsController implements Controller<Client[] | never> {
  constructor(
    private readonly findAllClientsUseCase: FindAllClientsUseCase,
    private readonly findAllClientsPresenter: ResponseHandler<Client[]>,
  ) {}

  async handleRequest(requestModel?: FindAllClientsRequestModel) {
    let query: FindAllClientsRequestModel['query'];

    if (requestModel && requestModel.query) {
      query = requestModel.query;
    }

    const clients = await this.findAllClientsUseCase.findAll(query);
    return this.findAllClientsPresenter.response(clients);
  }
}
