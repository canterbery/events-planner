import { logger } from '~/libs/packages/logger/logger.js';

import { EventController } from './event.controller.js';
import { EventModel } from './event.model.js';
import { EventRepository } from './event.repository.js';
import { EventService } from './event.service.js';

const eventsRepository = new EventRepository(EventModel);
const eventsService = new EventService(eventsRepository);
const eventsController = new EventController(logger, eventsService);

export { eventsController, eventsService };
export { EventModel } from './event.model.js';
