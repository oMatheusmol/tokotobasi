const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestValidationError } from '../../../../../common/errors/request-validation-error';
import { genericStringSanitizerSingleton } from '../../../../../common/generic/generic-string-sanitizer-adapter';
import { objectKeyExists } from '../../../../../common/helpers/object-key-exists';
import { Controller, ResponseHandler } from '../../../adapters/express-route-adapter';
import { Update`+resourceUpper+`UseCase } from '../interface/update-`+resourceLower+`-use-case';
import { GenericMessageResponse } from '../../../../../presentation/responses/generic-message-response';
import { Update`+resourceUpper+`BodyRequest } from '../interface/update-`+resourceLower+`-body-request';

export class Update`+resourceUpper+`Controller implements Controller<void | never> {
  constructor(
    private readonly useCase: Update`+resourceUpper+`UseCase,
    private readonly genericUpdatedResponse: ResponseHandler<GenericMessageResponse>,
  ) {}

  public async handleRequest(requestModel: UpadateGenericRequest): Promise<any> {
    if (
      !objectKeyExists(requestModel, 'body') ||
      !objectKeyExists(requestModel, 'params') ||
      !objectKeyExists(requestModel.params, 'id')
    ) {
      throw new RequestValidationError('Invalid request');
    }

    const { id } = requestModel.params;
    const { body } = requestModel;

    const sanitizedBody = {
      name: this.sanitize(body.name),
      avatar: this.sanitize(body.avatar),
      address: this.sanitize(body.address),
    };

    await this.useCase.update(id, sanitizedBody);
    return this.genericUpdatedResponse.response({ message: '`+resourceUpper+` updated' });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private sanitize(value: any): string | never {
    if (!value) {
      throw new RequestValidationError('Invalid request');
    }

    return genericStringSanitizerSingleton.sanitize(value);
  }
}

type UpadateGenericRequest = {
  body: Update`+resourceUpper+`BodyRequest;
  params: {
    id: string;
  };
};
`;
    },
  };
  