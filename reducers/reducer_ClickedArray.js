import { CLICKED_ARRAY, REMOVE_CLICKEDARRAY } from '../actions/index';

const INITIAL_STATE = {list: []};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CLICKED_ARRAY:
      return {...state, list: action.array}
    case REMOVE_CLICKEDARRAY:
      return {...state, list: []}
    default:
      return state
  }
}
