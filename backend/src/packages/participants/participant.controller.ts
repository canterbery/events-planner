import { ApiPath } from '~/libs/enums/enums.js';
import {
  type ApiHandlerResponse,
  Controller,
  type ApiHandlerOptions,
} from '~/libs/packages/controller/controller.js';
import { HttpCode } from '~/libs/packages/http/http.js';
import { type ILogger } from '~/libs/packages/logger/logger.js';
import { ParticipantsApiPath } from './libs/enums/enums.js';
import { type ParticipantService } from './participant.service.js';
import { type ParticipantRegistrationRequestDto } from './libs/types/types.js';

class ParticipantController extends Controller {
  private participantService: ParticipantService;

  public constructor(logger: ILogger, participantService: ParticipantService) {
    super(logger, ApiPath.PARTICIPANTS);

    this.participantService = participantService;

    this.addRoute({
      path: ParticipantsApiPath.ROOT,
      method: 'GET',
      handler: () => this.findAll(),
    });

    this.addRoute({
      path: ParticipantsApiPath.ROOT,
      method: 'POST',

      handler: (options) => {
        return this.register(
          options as ApiHandlerOptions<{
            body: ParticipantRegistrationRequestDto;
          }>,
        );
      },
    });
  }

  private async findAll(): Promise<ApiHandlerResponse> {
    return {
      status: HttpCode.OK,
      payload: await this.participantService.findAll(),
    };
  }

  private async register(
    options: ApiHandlerOptions<{
      body: ParticipantRegistrationRequestDto;
    }>,
  ): Promise<ApiHandlerResponse> {
    return {
      status: HttpCode.OK,
      payload: await this.participantService.create(options.body),
    };
  }
}

export { ParticipantController };
