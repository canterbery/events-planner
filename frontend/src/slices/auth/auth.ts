import { signUp, signIn, logout, getCurrentUser } from './actions.js';
import { actions } from './auth.slice.js';

const allActions = {
  ...actions,
  signUp,
  signIn,
  logout,
  getCurrentUser,
};

export { allActions as actions };
export { reducer } from './auth.slice.js';
