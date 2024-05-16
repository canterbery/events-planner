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
  number,
  AsyncThunkConfig
>(`${sliceName}/getArticle`, (id, { extra }) => {
  const { eventsApi } = extra;

  return eventsApi.getParticipantsByEventId(id);
});

export { loadAll, getParticipantsByEventId };
