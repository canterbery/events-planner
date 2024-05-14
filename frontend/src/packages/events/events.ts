import { config } from '~/libs/packages/config/config.js';
import { http } from '~/libs/packages/http/http.js';
import { storage } from '~/libs/packages/storage/storage.js';
import { EventsApi } from './events-api.package.js';

const eventsApi = new EventsApi({
  baseUrl: config.ENV.API.ORIGIN_URL,
  storage,
  http,
});

export { eventsApi };
export { type EventEntityInstance } from './libs/types/types.js';
