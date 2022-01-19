const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `import { Controller, RequestModel, ResponseHandler } from '../../../adapters/express-route-adapter';
import { `+resourceUpper+` } from '../interface/`+resourceLower+`-interface';
import { FindAll`+resourceUpper+`sUseCase } from '../interface/find-all-`+resourceLower+`s-use-case';

type FindAll`+resourceUpper+`sRequestModel = RequestModel<
  void,
  void,
  {
    order?: 'desc' | 'asc';
    limit?: number;
    offset?: number;
  }
>;

export class FindAll`+resourceUpper+`sController implements Controller<`+resourceUpper+`[] | never> {
  constructor(
    private readonly findAll`+resourceUpper+`sUseCase: FindAll`+resourceUpper+`sUseCase,
    private readonly findAll`+resourceUpper+`sPresenter: ResponseHandler<`+resourceUpper+`[]>,
  ) {}

  async handleRequest(requestModel?: FindAll`+resourceUpper+`sRequestModel) {
    let query: FindAll`+resourceUpper+`sRequestModel['query'];

    if (requestModel && requestModel.query) {
      query = requestModel.query;
    }

    const `+resourceLower+`s = await this.findAll`+resourceUpper+`sUseCase.findAll(query);
    return this.findAll`+resourceUpper+`sPresenter.response(`+resourceLower+`s);
  }
}
`;
    },
  };
  