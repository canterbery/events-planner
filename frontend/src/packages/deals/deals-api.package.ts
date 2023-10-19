import { ApiPath, ContentType } from '~/libs/enums/enums.js';
import { HttpApi } from '~/libs/packages/api/api.js';
import { type IHttp } from '~/libs/packages/http/http.js';
import { type IStorage } from '~/libs/packages/storage/storage.js';

import { DealsApiPath } from './libs/enums/enums.js';
import { type DealEntityInstance } from './libs/types/types.js';

type Constructor = {
  baseUrl: string;
  http: IHttp;
  storage: IStorage;
};

class DealsApi extends HttpApi {
  public constructor({ baseUrl, http, storage }: Constructor) {
    super({ path: ApiPath.DEALS, baseUrl, http, storage });
  }

  public async getAll(): Promise<{ items: DealEntityInstance[] }> {
    const response = await this.load(
      this.getFullEndpoint(DealsApiPath.ROOT, {}),
      {
        method: 'GET',
        contentType: ContentType.JSON,
        hasAuth: false,
      },
    );

    return await response.json<{ items: DealEntityInstance[] }>();
  }
}

export { DealsApi };
