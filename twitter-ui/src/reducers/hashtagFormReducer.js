import { SET_HASHTAG} from '../actions';
const INITIAL_STATE =    '';

export default function ( state = INITIAL_STATE, action) {  
  switch (action.type) {
    case SET_HASHTAG :
      return action.payload;
    default:    
      return state;
  }
}