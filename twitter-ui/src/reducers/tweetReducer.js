import { ADD_NEW_TWEET} from '../actions';
const INITIAL_STATE =    [{
  id: 1234,
  text: 'alles tamam',
  user: 'killa hakan'
}];

export default function ( state = INITIAL_STATE, action) {  
  switch (action.type) {
    case ADD_NEW_TWEET :
      return [...state, action.payload];
    default:    
      return state;
  }
}