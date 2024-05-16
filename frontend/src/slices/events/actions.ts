import { createAsyncThunk } from '@reduxjs/toolkit';

import { type AsyncThunkConfig } from '~/libs/types/types.js';

import { name as sliceName } from './events.slice.js';
import {
  type ParticipantRegistrationResponseDto,
  type EventEntityInstance,
} from 'shared/build/index.js';

const loadAll = createAsyncThunk<
  { items: EventEntityInstance[] },
  string | null,
  AsyncThunkConfig
>(`${sliceName}/load-events`, (sortOption, { extra }) => {
  const { eventsApi } = extra;

  return eventsApi.getAll(sortOption);
});

const getParticipantsByEventId = createAsyncThunk<
  ParticipantRegistrationResponseDto[] | null,
  { eventId: number; fullName: string; email: string },
  AsyncThunkConfig
>(`${sliceName}/getArticle`, (payload, { extra }) => {
  const { eventsApi } = extra;

  return eventsApi.getParticipantsByEventId(payload);
});

export { loadAll, getParticipantsByEventId };
