import {
  type AnyAction,
  type MiddlewareArray,
  type ThunkMiddleware,
} from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

import { AppEnvironment } from '~/libs/enums/enums.js';
import { type IConfig } from '~/libs/packages/config/config.js';
import { authApi } from '~/packages/auth/auth.js';
import { eventsApi } from '~/packages/events/events.js';
import { userApi } from '~/packages/users/users.js';
import { participantsApi } from '~/packages/participants/participants.js';
import { reducer as authReducer } from '~/slices/auth/auth.js';
import { reducer as usersReducer } from '~/slices/users/users.js';
import { reducer as eventsReducer } from '~/slices/events/events.js';
import { reducer as participantsReducer } from '~/slices/participants/participants.js';
import { storage } from '../storage/storage.js';

type RootReducer = {
  auth: ReturnType<typeof authReducer>;
  users: ReturnType<typeof usersReducer>;
  events: ReturnType<typeof eventsReducer>;
  participants: ReturnType<typeof participantsReducer>;
};

type ExtraArguments = {
  authApi: typeof authApi;
  userApi: typeof userApi;
  eventsApi: typeof eventsApi;
  participantsApi: typeof participantsApi;
  storage: typeof storage;
};

class Store {
  public instance: ReturnType<
    typeof configureStore<
      RootReducer,
      AnyAction,
      MiddlewareArray<[ThunkMiddleware<RootReducer, AnyAction, ExtraArguments>]>
    >
  >;

  public constructor(config: IConfig) {
    this.instance = configureStore({
      devTools: config.ENV.APP.ENVIRONMENT !== AppEnvironment.PRODUCTION,
      reducer: {
        auth: authReducer,
        users: usersReducer,
        events: eventsReducer,
        participants: participantsReducer,
      },
      middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
          thunk: {
            extraArgument: this.extraArguments,
          },
        });
      },
    });
  }

  public get extraArguments(): ExtraArguments {
    return {
      authApi,
      userApi,
      eventsApi,
      participantsApi,
      storage,
    };
  }
}

export { Store };
