import { logger } from '~/libs/packages/logger/logger.js';

import { DealController } from './deal.controller.js';
import { DealModel } from './deal.model.js';
import { DealRepository } from './deal.repository.js';
import { DealService } from './deal.service.js';

const dealRepository = new DealRepository(DealModel);
const dealService = new DealService(dealRepository);
const dealController = new DealController(logger, dealService);

export { dealController, dealService };
export { DealModel } from './deal.model.js';
