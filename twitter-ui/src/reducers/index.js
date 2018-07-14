import { combineReducers } from 'redux';
import tweetReducer from './tweetReducer'
import hashtagFormReducer from './hashtagFormReducer'

const rootReducer = combineReducers({
  tweets: tweetReducer,
  hashtag: hashtagFormReducer
});

export default rootReducer;

