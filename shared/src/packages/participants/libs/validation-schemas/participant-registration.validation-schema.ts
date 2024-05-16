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
  fullName: joi.string().trim().required().messages({
    'string.empty': 'Please enter your name',
  }),
  birthDate: joi.string().trim().required().messages({
    'string.empty': 'Please enter your date of birth',
  }),
  source: joi.string().trim().required(),
  eventId: joi.number().required(),
});

export { participantRegistration };
