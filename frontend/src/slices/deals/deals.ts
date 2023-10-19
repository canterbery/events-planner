import { loadAll } from './actions.js';
import { actions } from './deals.slice.js';

const allActions = {
  ...actions,
  loadAll,
};

export { allActions as actions };
export { reducer } from './deals.slice.js';
