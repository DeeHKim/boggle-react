import { UPDATE_SCORE } from '../actions/index';

const INITIAL_STATE = {scores: [], words: []};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case UPDATE_SCORE: {
      let scoresArray = state.scores;
      let wordsArray = state.words;
      scoresArray.push(action.obj);
      wordsArray.push(action.obj.word);
      return {...state, scores: scoresArray, words: wordsArray}
    }
    default:
      return state
  }
}
