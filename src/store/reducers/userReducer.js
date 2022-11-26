import { SEED_USERS } from '../INITIAL_STATE';

export default function useReducer(state = SEED_USERS, { type, payload }) {
  return state;
}
