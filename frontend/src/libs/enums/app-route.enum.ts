const AppRoute = {
  ROOT: '/',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  DEALS: '/deals',
  EVENTS: '/events',
  EVENT_REGISTRATION: '/event-registration/:id',
  EVENT_PARTICIPANTS: '/event/:id/participants',
} as const;

export { AppRoute };
