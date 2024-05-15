import { logger } from '~/libs/packages/logger/logger.js';

import { ParticipantController } from './participant.controller.js';
import { ParticipantModel } from './participant.model.js';
import { ParticipantRepository } from './participant.repository.js';
import { ParticipantService } from './participant.service.js';

const participantsRepository = new ParticipantRepository(ParticipantModel);
const participantsService = new ParticipantService(participantsRepository);
const participantsController = new ParticipantController(
  logger,
  participantsService,
);

export { participantsController, participantsService };
export { ParticipantModel } from './participant.model.js';
