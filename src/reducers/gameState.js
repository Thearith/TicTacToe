import * as types from '../actions/actionTypes';
import { GAME_SIZE,
  X_PLAYER,
  O_PLAYER,
  NO_WINNER,
  getLoser } from '../constants/constants';

const initialState = {
  playerTurn: X_PLAYER,
  scores: {},
  winner: NO_WINNER,
  isDraw: false,
  stats: {
    xPlayer: 0,
    oPlayer: 0
  }
};

export default function gameState(state = initialState, action = {}) {
  const { playerTurn, scores, winner, isDraw, stats } = state;

  switch (action.type) {
    case types.CLICK:
      // An action is not valid if
      // 1. The action is not caused by Player X or Player O
      // 2. The clicked column has already been clicked

      if(scores[action.index] !== undefined) {
        return state;
      }

      let newScores = {
        ...scores,
        [action.index]: playerTurn
      };

      // Checks if there is a winner, if so, update the winner state
      const newWinner = getWinner(newScores);
      if(newWinner !== NO_WINNER) {
        return {
          playerTurn: 1 - playerTurn,
          scores: newScores,
          winner: newWinner,
          isDraw: false,
          stats: {
            xPlayer: newWinner === X_PLAYER ? stats.xPlayer+1 : stats.xPlayer,
            oPlayer: newWinner === O_PLAYER ? stats.oPlayer+1 : stats.oPlayer
          }
        };
      }

      // Checks if there is a draw
      if(isGameDraw(newScores)) {
        console.log("LOL DRAW");
        return {
          ...state,
          playerTurn: 1 - playerTurn,
          scores: newScores,
          winner: newWinner,
          isDraw: true
        };
      }

      return {
        ...state,
        playerTurn: 1 - playerTurn,
        scores: newScores,
      }

    case types.RESET:
      return {
        ...state,
        playerTurn: isDraw ? X_PLAYER : getLoser(winner),
        scores: {},
        winner: NO_WINNER,
        isDraw: false
      };
  }

  return state;
}

/**
* determines whether state has a winner (either PLAYER_X or PLAYER_O)
* For a n-size game, The state has a winner if:
*    1. There is a vertical row with n consecutive X or O
*    2. There is a horizontal row with n consecutive X or O
*    3. There is a diagonal with n consecutive X or O
*/
const getWinner = (scores = {}) => {
  if(isPlayerXWinning(scores)) {
    return X_PLAYER;
  }

  if(isPlayerOWinning(scores)) {
    return O_PLAYER;
  }

  return NO_WINNER;
}

const isGameWinning = (scores = {}) => {
  return getWinner(scores) !== NO_WINNER;
}

function isPlayerXWinning(scores = {}) {
  return isPlayerWinning(scores, X_PLAYER);
}

function isPlayerOWinning(scores = {}) {
  return isPlayerWinning(scores, O_PLAYER);
}

function isPlayerWinning(scores = {}, player) {
  const playerPos = Object.keys(scores)
          .filter(index => scores[index] === player)
          .map(str => parseInt(str));

  const isStraightRow = [...Array(GAME_SIZE)]
                  .some((_, index) => {
                    const checkList = constructRowCheckList(index, GAME_SIZE);
                    return isSuperSet(playerPos, checkList);
                  });
  const isStraightCol = [...Array(GAME_SIZE)]
                  .some((_, index) => {
                    const checkList = constructColCheckList(index, GAME_SIZE);
                    return isSuperSet(playerPos, checkList);
                  });
  const isStraightDiag = isSuperSet(playerPos, constructDiagCheckList(1, GAME_SIZE)) ||
                      isSuperSet(playerPos, constructDiagCheckList(-1, GAME_SIZE));

  return isStraightRow || isStraightCol || isStraightDiag;
}

function isSuperSet(arr1, arr2) {
  return arr2.every((val) => {
      var numIn1 = arr1.filter(function(el) { return el === val;  }).length;
      var numIn2 = arr2.filter(function(el) { return el === val;  }).length;
      return numIn1 === numIn2;
    });
}

function constructRowCheckList(index, size) {
  return [...Array(size)].map((_, i) =>
        size * index + i);
}

function constructColCheckList(index, size) {
  return [...Array(size)].map((_, i) =>
        size * i + index);
}

function constructDiagCheckList(dir, size) {
  return [...Array(size)].map((_, i) =>
        (size + dir) * i);
}

/**
* determines whether state has a draw
*   1. Checks if every column is clicked
*   2. Checks if there is not a winner
*/
const isGameDraw = (scores = {}) => {
  return Object.keys(scores).length === GAME_SIZE * GAME_SIZE
      && !isGameWinning(scores);
};
