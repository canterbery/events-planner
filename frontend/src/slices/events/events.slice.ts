import { createSlice } from '@reduxjs/toolkit';

import { DataStatus } from '~/libs/enums/enums.js';
import { type ValueOf } from '~/libs/types/types.js';

import { type EventEntityInstance } from '~/packages/events/events.js';
import { loadAll } from './actions.js';

type State = {
  events: EventEntityInstance[];
  dataStatus: ValueOf<typeof DataStatus>;
};

const initialState: State = {
  events: [],
  dataStatus: DataStatus.IDLE,
};

const { reducer, actions, name } = createSlice({
  initialState,
  name: 'events',
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loadAll.pending, (state) => {
      state.dataStatus = DataStatus.PENDING;
    });
    builder.addCase(loadAll.fulfilled, (state, action) => {
      state.events = action.payload.items;
      state.dataStatus = DataStatus.FULFILLED;
    });
    builder.addCase(loadAll.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED;
    });
  },
});

export { actions, name, reducer };
