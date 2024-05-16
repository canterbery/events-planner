import '~/assets/css/styles.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import {
  App,
  ProtectedRoute,
  RouterProvider,
  StoreProvider,
} from '~/libs/components/components.js';
import { AppRoute } from '~/libs/enums/enums.js';
import { store } from '~/libs/packages/store/store.js';
import { Auth } from '~/pages/auth/auth.js';
import { Landing } from './pages/landing/landing.js';
import { Events } from './pages/events/events.js';
import { PublicRoute } from './libs/components/components.js';
import { EventRegistration } from './pages/event-registration/event-registration.js';
import { EventParticipantsLayout } from './pages/event-participants/event-participants-layout.js';

createRoot(document.querySelector('#root') as HTMLElement).render(
  <StrictMode>
    <StoreProvider store={store.instance}>
      <RouterProvider
        routes={[
          {
            path: AppRoute.ROOT,
            element: <App />,
            children: [
              {
                path: AppRoute.ROOT,
                element: (
                  <PublicRoute>
                    <Landing />
                  </PublicRoute>
                ),
              },
              {
                path: AppRoute.SIGN_IN,
                element: (
                  <PublicRoute>
                    <Auth />
                  </PublicRoute>
                ),
              },
              {
                path: AppRoute.SIGN_UP,
                element: (
                  <PublicRoute>
                    <Auth />
                  </PublicRoute>
                ),
              },
              {
                path: AppRoute.EVENTS,
                element: (
                  <ProtectedRoute>
                    <Events />
                  </ProtectedRoute>
                ),
              },
              {
                path: AppRoute.EVENT_REGISTRATION,
                element: (
                  <ProtectedRoute>
                    <EventRegistration />
                  </ProtectedRoute>
                ),
              },
              {
                path: AppRoute.EVENT_PARTICIPANTS,
                element: (
                  <ProtectedRoute>
                    <EventParticipantsLayout />
                  </ProtectedRoute>
                ),
              },
            ],
          },
        ]}
      />
    </StoreProvider>
  </StrictMode>,
);
