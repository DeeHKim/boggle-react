import { BOARD } from '../actions/index';

const INITIAL_STATE = {matrix: []};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case BOARD:
      return {...state, matrix: action.board}
    default:
      return state
  }
}
