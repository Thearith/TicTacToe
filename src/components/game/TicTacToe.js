import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import TicTacToeCol from './TicTacToeCol';

const TicTacToe = ({
  size,
  scores,
  playerTurn,
  onColumnClick
}) => (
  <View style={styles.container} >
    {
        [...Array(size)].map((_, index) =>
          <TicTacToeRow
            key={index}
            row={index}
            size={size}
            scores={scores}
            onColumnClick={onColumnClick} /> )
    }
  </View>
);

const TicTacToeRow = ({
  size,
  row,
  scores,
  onColumnClick
}) => (
  <View style={styles.rowContainer}>
    {
      [...Array(size)].map((_, index) =>
        <TicTacToeCol
          key={index}
          col={row*size + index}
          colState={scores[row*size+index]}
          onColumnClick={onColumnClick}/> )
    }
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default TicTacToe;
