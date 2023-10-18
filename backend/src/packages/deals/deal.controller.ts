import { ApiPath } from '~/libs/enums/enums.js';
import {
  type ApiHandlerResponse,
  Controller,
} from '~/libs/packages/controller/controller.js';
import { HttpCode } from '~/libs/packages/http/http.js';
import { type ILogger } from '~/libs/packages/logger/logger.js';
import { DealsApiPath } from './libs/enums/enums.js';
import { type DealService } from './deal.service.js';

class DealController extends Controller {
  private dealService: DealService;

  public constructor(logger: ILogger, dealService: DealService) {
    super(logger, ApiPath.DEALS);

    this.dealService = dealService;

    this.addRoute({
      path: DealsApiPath.ROOT,
      method: 'GET',
      handler: () => this.findAll(),
    });
  }

  private async findAll(): Promise<ApiHandlerResponse> {
    return {
      status: HttpCode.OK,
      payload: await this.dealService.findAll(),
    };
  }
}

export { DealController };
