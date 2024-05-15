import { createAsyncThunk } from '@reduxjs/toolkit';

import { type AsyncThunkConfig } from '~/libs/types/types.js';

import { name as sliceName } from './participants.slice.js';
import {
  type ParticipantRegistrationRequestDto,
  type ParticipantEntityInstance,
  type ParticipantRegistrationResponseDto,
} from '~/packages/participants/participants.js';

const loadAll = createAsyncThunk<
  { items: ParticipantEntityInstance[] },
  undefined,
  AsyncThunkConfig
>(`${sliceName}/load-events`, (_, { extra }) => {
  const { participantsApi } = extra;

  return participantsApi.getAll();
});

const register = createAsyncThunk<
  ParticipantRegistrationResponseDto,
  ParticipantRegistrationRequestDto,
  AsyncThunkConfig
>(`${sliceName}/sign-in`, async (registerPayload, { extra }) => {
  const { participantsApi } = extra;
  return await participantsApi.register(registerPayload);
});

export { loadAll, register };
