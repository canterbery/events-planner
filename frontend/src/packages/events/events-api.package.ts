import { ApiPath, ContentType } from '~/libs/enums/enums.js';
import { HttpApi } from '~/libs/packages/api/api.js';
import { type IHttp } from '~/libs/packages/http/http.js';
import { type IStorage } from '~/libs/packages/storage/storage.js';

import { EventsApiPath } from './libs/enums/enums.js';
import { type EventEntityInstance } from './libs/types/types.js';
import { type ParticipantRegistrationResponseDto } from '../participants/participants.js';

type Constructor = {
  baseUrl: string;
  http: IHttp;
  storage: IStorage;
};

class EventsApi extends HttpApi {
  public constructor({ baseUrl, http, storage }: Constructor) {
    super({ path: ApiPath.EVENTS, baseUrl, http, storage });
  }

  public async getAll(payload: {
    skip: number;
    take: number;
    sortOption: string | null;
  }): Promise<{ items: EventEntityInstance[]; skip: number }> {
    const response = await this.load(
      this.getFullEndpoint(EventsApiPath.ROOT, {}),
      {
        method: 'GET',
        contentType: ContentType.JSON,
        hasAuth: false,
        query: payload,
      },
    );

    return await response.json<{
      items: EventEntityInstance[];
      skip: number;
    }>();
  }

  public async getParticipantsByEventId(payload: {
    eventId: number;
    fullName: string;
    email: string;
  }): Promise<ParticipantRegistrationResponseDto[] | null> {
    const response = await this.load(
      this.getFullEndpoint(EventsApiPath.$ID_PARTICIPANTS, {
        id: payload.eventId.toString(),
      }),
      {
        method: 'GET',
        contentType: ContentType.JSON,
        query: { fullName: payload.fullName, email: payload.email },
        hasAuth: false,
      },
    );

    return await response.json<ParticipantRegistrationResponseDto[] | null>();
  }
}

export { EventsApi };
