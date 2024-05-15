import { config } from '~/libs/packages/config/config.js';
import { database } from '~/libs/packages/database/database.js';
import { logger } from '~/libs/packages/logger/logger.js';
import { authController } from '~/packages/auth/auth.js';
import { userController } from '~/packages/users/users.js';
import { eventsController } from '~/packages/events/events.js';
import { participantsController } from '~/packages/participants/participants.js';

import { ServerApp } from './server-app.js';
import { ServerAppApi } from './server-app-api.js';
import { dealController } from '~/packages/deals/deals.js';

const apiV1 = new ServerAppApi(
  'v1',
  config,
  ...authController.routes,
  ...userController.routes,
  ...dealController.routes,
  ...eventsController.routes,
  ...participantsController.routes,
);
const serverApp = new ServerApp({
  config,
  logger,
  database,
  apis: [apiV1],
});

export { serverApp };
export {
  type ServerAppRouteParameters,
  type WhiteRoute,
} from './libs/types/types.js';
