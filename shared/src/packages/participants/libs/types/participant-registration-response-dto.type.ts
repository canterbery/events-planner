import { type ParticipantRegistrationRequestDto } from './participant-registration-request-dto.type.js';

type ParticipantRegistrationResponseDto = ParticipantRegistrationRequestDto & {
  id: number;
};

export { type ParticipantRegistrationResponseDto };
