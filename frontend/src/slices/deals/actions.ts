import { createAsyncThunk } from '@reduxjs/toolkit';

import { type AsyncThunkConfig } from '~/libs/types/types.js';

import { name as sliceName } from './deals.slice.js';
import { type DealEntityInstance } from 'shared/build/index.js';

const loadAll = createAsyncThunk<
  { items: DealEntityInstance[] },
  undefined,
  AsyncThunkConfig
>(`${sliceName}/load-deals`, (_, { extra }) => {
  const { dealsApi } = extra;

  return dealsApi.getAll();
});

export { loadAll };
