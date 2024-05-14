import { ApiPath } from '~/libs/enums/enums.js';
import {
  type ApiHandlerResponse,
  Controller,
} from '~/libs/packages/controller/controller.js';
import { HttpCode } from '~/libs/packages/http/http.js';
import { type ILogger } from '~/libs/packages/logger/logger.js';
import { EventsApiPath } from './libs/enums/enums.js';
import { type EventService } from './event.service.js';

class EventController extends Controller {
  private eventService: EventService;

  public constructor(logger: ILogger, eventService: EventService) {
    super(logger, ApiPath.EVENTS);

    this.eventService = eventService;

    this.addRoute({
      path: EventsApiPath.ROOT,
      method: 'GET',
      handler: () => this.findAll(),
    });
  }

  private async findAll(): Promise<ApiHandlerResponse> {
    return {
      status: HttpCode.OK,
      payload: await this.eventService.findAll(),
    };
  }
}

export { EventController };
