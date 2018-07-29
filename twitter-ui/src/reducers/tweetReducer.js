import { ADD_NEW_TWEET} from '../actions';
const INITIAL_STATE =    [];

export default function ( state = INITIAL_STATE, action) {  
  console.log('reducera geldi', action , state)
  switch (action.type) {
    case ADD_NEW_TWEET :
      return [...state, action.payload];
    default:    
      return state;
  }
}