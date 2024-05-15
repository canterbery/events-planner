import { ApiPath, ContentType } from '~/libs/enums/enums.js';
import { HttpApi } from '~/libs/packages/api/api.js';
import { type IHttp } from '~/libs/packages/http/http.js';
import { type IStorage } from '~/libs/packages/storage/storage.js';

import { ParticipantsApiPath } from './libs/enums/enums.js';
import {
  type ParticipantRegistrationRequestDto,
  type ParticipantEntityInstance,
  type ParticipantRegistrationResponseDto,
} from './libs/types/types.js';

type Constructor = {
  baseUrl: string;
  http: IHttp;
  storage: IStorage;
};

class ParticipantsApi extends HttpApi {
  public constructor({ baseUrl, http, storage }: Constructor) {
    super({ path: ApiPath.PARTICIPANTS, baseUrl, http, storage });
  }

  public async getAll(): Promise<{ items: ParticipantEntityInstance[] }> {
    const response = await this.load(
      this.getFullEndpoint(ParticipantsApiPath.ROOT, {}),
      {
        method: 'GET',
        contentType: ContentType.JSON,
        hasAuth: false,
      },
    );

    return await response.json<{ items: ParticipantEntityInstance[] }>();
  }

  public async register(
    payload: ParticipantRegistrationRequestDto,
  ): Promise<ParticipantRegistrationResponseDto> {
    const response = await this.load(
      this.getFullEndpoint(ParticipantsApiPath.ROOT, {}),
      {
        method: 'POST',
        contentType: ContentType.JSON,
        payload: JSON.stringify(payload),
        hasAuth: false,
      },
    );

    return await response.json<ParticipantRegistrationResponseDto>();
  }
}

export { ParticipantsApi };
