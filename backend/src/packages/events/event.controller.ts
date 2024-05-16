import { ApiPath } from '~/libs/enums/enums.js';
import {
  type ApiHandlerResponse,
  Controller,
  type ApiHandlerOptions,
} from '~/libs/packages/controller/controller.js';
import { HttpCode } from '~/libs/packages/http/http.js';
import { type ILogger } from '~/libs/packages/logger/logger.js';
import { EventsApiPath } from './libs/enums/enums.js';
import { type EventService } from './event.service.js';
import { type ParticipantService } from '../participants/participants.js';

class EventController extends Controller {
  private eventService: EventService;
  private participantService: ParticipantService;

  public constructor(
    logger: ILogger,
    eventService: EventService,
    participantService: ParticipantService,
  ) {
    super(logger, ApiPath.EVENTS);

    this.eventService = eventService;
    this.participantService = participantService;

    this.addRoute({
      path: EventsApiPath.ROOT,
      method: 'GET',
      handler: (options) =>
        this.findAll(
          options as ApiHandlerOptions<{
            query: { take: number; skip: number; sortOption: string | null };
          }>,
        ),
    });

    this.addRoute({
      path: EventsApiPath.$ID_PARTICIPANTS,
      method: 'GET',

      handler: (options) => {
        return this.getParticipantsByEventId(
          options as ApiHandlerOptions<{
            params: { id: number };
            query: { fullName: string; email: string };
          }>,
        );
      },
    });
  }

  private async findAll(
    options: ApiHandlerOptions<{
      query: { take: number; skip: number; sortOption: string | null };
    }>,
  ): Promise<ApiHandlerResponse> {
    return {
      status: HttpCode.OK,
      payload: await this.eventService.findAll(options.query),
    };
  }

  private async getParticipantsByEventId(
    options: ApiHandlerOptions<{
      params: { id: number };
      query: { fullName: string; email: string };
    }>,
  ): Promise<ApiHandlerResponse> {
    return {
      status: HttpCode.OK,
      payload: await this.participantService.getByEventId(
        options.params.id,
        options.query,
      ),
    };
  }
}

export { EventController };
