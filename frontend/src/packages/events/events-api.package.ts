import { ApiPath, ContentType } from '~/libs/enums/enums.js';
import { HttpApi } from '~/libs/packages/api/api.js';
import { type IHttp } from '~/libs/packages/http/http.js';
import { type IStorage } from '~/libs/packages/storage/storage.js';

import { EventsApiPath } from './libs/enums/enums.js';
import { type EventEntityInstance } from './libs/types/types.js';

type Constructor = {
  baseUrl: string;
  http: IHttp;
  storage: IStorage;
};

class EventsApi extends HttpApi {
  public constructor({ baseUrl, http, storage }: Constructor) {
    super({ path: ApiPath.EVENTS, baseUrl, http, storage });
  }

  public async getAll(): Promise<{ items: EventEntityInstance[] }> {
    const response = await this.load(
      this.getFullEndpoint(EventsApiPath.ROOT, {}),
      {
        method: 'GET',
        contentType: ContentType.JSON,
        hasAuth: false,
      },
    );

    return await response.json<{ items: EventEntityInstance[] }>();
  }
}

export { EventsApi };
