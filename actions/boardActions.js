import * as TYPES from './index';
import {boardGenerator} from '../helpers/boardGenerator';

export const newBoard = () => {
  let board = boardGenerator();
  return { type: TYPES.BOARD, board };
}

export const updateClickedArray = (array) => {
  return { type: TYPES.CLICKED_ARRAY, array };
}

export const removeClickedArray = () => {
  return { type: TYPES.REMOVE_CLICKEDARRAY, null }
}

export const addLetter = (letter) => {
  return { type: TYPES.ADD_LETTER, letter };
}

export const removeLetter = () => {
  return { type: TYPES.REMOVE_LETTER, null };
}

export const removeWord = () => {
  return {type: TYPES.REMOVE_WORD, null }
}

export const updateScore = (obj) => {
  return { type: TYPES.UPDATE_SCORE, obj}
}
