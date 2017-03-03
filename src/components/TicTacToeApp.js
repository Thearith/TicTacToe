import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

import TicTacToeCont from './game/TicTacToeCont';
import GameOverDialog from './dialog/GameOverDialog';
import GameStatistics from './statistics/GameStatistics';

import { NO_WINNER } from '../constants/constants';

const TicTacToeApp = ({
  winner,
  isDraw
}) => (
    <View style={styles.container}>
      {winner !== NO_WINNER || isDraw ?
        <GameOverDialog winner={winner} isDraw={isDraw}/>
        :
        <View />
      }
      <View style={styles.gameContainer}>
        <GameStatistics style={styles.statContainer} />
        <TicTacToeCont style={styles.ticContainer}/>
      </View>
    </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  gameContainer: {
    marginTop: 75,
    justifyContent: 'flex-start'
  },
  statContainer: {
    marginBottom: 100
  }
});


// Connects React with Redux state

const mapStateToProps = (state) => ({
  winner: state.gameState.winner,
  isDraw: state.gameState.isDraw,
});

export default connect(mapStateToProps, null)(TicTacToeApp);
