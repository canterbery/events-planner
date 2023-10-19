import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { DataStatus } from '~/libs/enums/enums.js';
import { type ValueOf } from '~/libs/types/types.js';
import { type UserAuthResponseDto as User } from '~/packages/users/users.js';

import { signUp, signIn } from './actions.js';

type State = {
  user: User | null;
  dataStatus: ValueOf<typeof DataStatus>;
};

const initialState: State = {
  user: null,
  dataStatus: DataStatus.IDLE,
};

const { reducer, actions, name } = createSlice({
  initialState,
  name: 'auth',
  reducers: {},
  extraReducers(builder) {
    builder.addMatcher(isAnyOf(signIn.pending, signUp.pending), (state) => {
      state.dataStatus = DataStatus.PENDING;
    });
    builder.addMatcher(isAnyOf(signIn.rejected, signUp.rejected), (state) => {
      state.dataStatus = DataStatus.REJECTED;
      state.user = null;
    });
    builder.addMatcher(
      isAnyOf(signIn.fulfilled, signUp.fulfilled),
      (state, action) => {
        state.dataStatus = DataStatus.FULFILLED;
        state.user = action.payload;
      },
    );
  },
});

export { actions, name, reducer };
