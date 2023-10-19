import { config } from '~/libs/packages/config/config.js';
import { http } from '~/libs/packages/http/http.js';
import { storage } from '~/libs/packages/storage/storage.js';
import { DealsApi } from './deals-api.package.js';

const dealsApi = new DealsApi({
  baseUrl: config.ENV.API.ORIGIN_URL,
  storage,
  http,
});

export { dealsApi };
export { type DealEntityInstance } from './libs/types/types.js';
