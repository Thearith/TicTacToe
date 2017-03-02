import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import { getPlayerName, X_PLAYER, O_PLAYER } from '../../constants/constants';

const PlayerStatistics = ({
  wins,
  player
}) => (
  <View style={styles.container}>
    <Text style={[styles.playerName, getStyleState(player)]}>{getPlayerName(player)}</Text>
    <Text style={styles.wins}>{wins}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  player: {
    fontSize: 15,
    marginBottom: 5,
    textAlign: 'center'
  },
  playerName: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center'
  },
  xPlayer: {
    color: 'tomato',
  },
  oPlayer: {
    color: '#AEC6CF'
  },
  wins: {
    fontSize: 20,
    color: 'black',
    fontStyle: 'italic'
  }
});


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


export default PlayerStatistics;
