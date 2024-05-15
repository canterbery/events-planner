import {
  ParticipantsSource,
  type ParticipantRegistrationRequestDto,
} from '~/packages/participants/participants.js';

const DEFAULT_LOGIN_PAYLOAD: Omit<
  ParticipantRegistrationRequestDto,
  'eventId'
> = {
  fullName: '',
  email: '',
  birthDate: '',
  source: ParticipantsSource.SOCIAL_MEDIA,
} as const;

export { DEFAULT_LOGIN_PAYLOAD };
