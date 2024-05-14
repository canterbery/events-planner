import { createAsyncThunk } from '@reduxjs/toolkit';

import { type AsyncThunkConfig } from '~/libs/types/types.js';

import { name as sliceName } from './events.slice.js';
import { type EventEntityInstance } from 'shared/build/index.js';

const loadAll = createAsyncThunk<
  { items: EventEntityInstance[] },
  undefined,
  AsyncThunkConfig
>(`${sliceName}/load-events`, (_, { extra }) => {
  const { eventsApi } = extra;

  return eventsApi.getAll();
});

export { loadAll };
