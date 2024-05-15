import joi from 'joi';

import { type ParticipantRegistrationRequestDto } from '../types/types.js';

const participantRegistration = joi.object<
  ParticipantRegistrationRequestDto,
  true
>({
  email: joi
    .string()
    .trim()
    .email({
      tlds: {
        allow: false,
      },
    })
    .required()
    .messages({
      'string.email': 'Please enter valid email',
      'string.empty': 'Email is required',
    }),
  fullName: joi.string().trim().required(),
  birthDate: joi.string().trim().required(),
  source: joi.string().trim().required(),
  eventId: joi.number().required(),
});

export { participantRegistration };
