import { config } from '~/libs/packages/config/config.js';
import { http } from '~/libs/packages/http/http.js';
import { storage } from '~/libs/packages/storage/storage.js';
import { ParticipantsApi } from './participants-api.package.js';

const participantsApi = new ParticipantsApi({
  baseUrl: config.ENV.API.ORIGIN_URL,
  storage,
  http,
});

export { participantsApi };
export {
  type ParticipantEntityInstance,
  type ParticipantRegistrationRequestDto,
  type ParticipantRegistrationResponseDto,
} from './libs/types/types.js';
export { registrationValidationSchema } from './libs/validation-schemas/validation-schemas.js';
export { ParticipantsSource } from './libs/enums/enums.js';
