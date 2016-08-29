import {combineReducers} from 'redux';

import board from './reducer_Board';
import clicked from './reducer_ClickedArray';
import word from './reducer_Word';
import score from './reducer_Score';

const rootReducer = combineReducers({
  board,
  clicked,
  word,
  score
});

export default rootReducer
