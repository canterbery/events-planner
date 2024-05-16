import { getParticipantsByEventId, loadAll } from './actions.js';
import { actions } from './events.slice.js';

const allActions = {
  ...actions,
  loadAll,
  getParticipantsByEventId,
};

export { allActions as actions };
export { reducer } from './events.slice.js';
