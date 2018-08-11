import { ADD_NEW_TWEET, RETWEET } from '../actions';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  console.log('reducera geldi', action, state);
  switch (action.type) {
    case ADD_NEW_TWEET:
      return [...state, action.payload];
    case RETWEET:
      return state;
    default:
      return state;
  }
}
