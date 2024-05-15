import { ApiPath } from '~/libs/enums/enums.js';
import {
  type ApiHandlerResponse,
  Controller,
} from '~/libs/packages/controller/controller.js';
import { HttpCode } from '~/libs/packages/http/http.js';
import { type ILogger } from '~/libs/packages/logger/logger.js';
import { ParticipantsApiPath } from './libs/enums/enums.js';
import { type ParticipantService } from './participant.service.js';

class ParticipantController extends Controller {
  private eventService: ParticipantService;

  public constructor(logger: ILogger, eventService: ParticipantService) {
    super(logger, ApiPath.PARTICIPANTS);

    this.eventService = eventService;

    this.addRoute({
      path: ParticipantsApiPath.ROOT,
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

export { ParticipantController };
