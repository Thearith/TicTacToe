import * as types from './actionTypes';


/**
* Action Creators for GameState
*/
export const clickAction = (index) => ({
  type: types.CLICK,
  index
});

export const resetAction = () => ({
  type: types.RESET
});
