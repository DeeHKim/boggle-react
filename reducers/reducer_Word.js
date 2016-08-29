import { ADD_LETTER, REMOVE_LETTER, REMOVE_WORD } from '../actions/index';

const INITIAL_STATE = {string: ""};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_LETTER: {
      let updatedWord = state.string;
      updatedWord += action.letter;
      return {...state, string: updatedWord}
    }
    case REMOVE_LETTER: {
      let updatedWord = state.string.slice(0, -1);
      return {...state, string: updatedWord}
    }
    case REMOVE_WORD: {
      let updatedWord = state.string.slice(state.string.length);
      return {...state, string: updatedWord}
    }
    default:
      return state
  }
}
