import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import TicTacToe from './TicTacToe';
import { GAME_SIZE, getPlayerName, X_PLAYER, O_PLAYER } from '../../constants/constants';

import { clickAction } from '../../actions/actionCreators';

const mapStateToProps = (state) => ({
  scores: state.gameState.scores,
  playerTurn: state.gameState.playerTurn,
  size: GAME_SIZE
});

const mapDispatchToProps = (dispatch) => ({
  onColumnClick: (index) => {
    dispatch(clickAction(index))
  }
});

const TicTacToeCont = ({
  scores,
  playerTurn,
  size,
  onColumnClick
}) => (
  <View style={styles.container}>
    <Text style={[styles.player, getStyleState(playerTurn)]}>{getPlayerName(playerTurn)}</Text>
    <TicTacToe
      scores={scores}
      playerTurn={playerTurn}
      onColumnClick={onColumnClick}
      size={size} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 75,
    alignItems: "center"
  },
  player: {
    fontSize: 25,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  xPlayer: {
    color: 'tomato',
  },
  oPlayer: {
    color: '#AEC6CF'
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicTacToeCont);


/**
* Utility function
* Chooses style according to column state
* @param: state, which is pressed by either Player X or Player O, or neither
*/
const getStyleState = (state) => {
  if(state === undefined) {
    return styles.defaultPlayer;
  }

  switch(parseInt(state)) {
    case X_PLAYER:
      return styles.xPlayer;

    case O_PLAYER:
      return styles.oPlayer;
  }
}
