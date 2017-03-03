// Game Size
export const GAME_SIZE = 5;

// Player Turn
export const X_PLAYER = 0;
export const O_PLAYER = 1 - X_PLAYER;
export const NO_WINNER = -1;

export const X_PLAYER_NAME = "Player X";
export const O_PLAYER_NAME = "Player O";
export const X_PLAYER_SHORT_NAME = "X";
export const O_PLAYER_SHORT_NAME = "O";

/**
* Utility
*/
export const getPlayerName = (player) => {
  switch(parseInt(player)) {
    case X_PLAYER:
      return X_PLAYER_NAME;

    case O_PLAYER:
      return O_PLAYER_NAME;
  }
}

export const getPlayerShortName = (player) => {
  switch(parseInt(player)) {
    case X_PLAYER:
      return X_PLAYER_SHORT_NAME;

    case O_PLAYER:
      return O_PLAYER_SHORT_NAME;
  }
}

export const getLoser = (winner) => (1 - winner);
