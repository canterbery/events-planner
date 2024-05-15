import { loadAll, register } from './actions.js';
import { actions } from './participants.slice.js';

const allActions = {
  ...actions,
  loadAll,
  register,
};

export { allActions as actions };
export { reducer } from './participants.slice.js';
