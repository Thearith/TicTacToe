import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

import PlayerStatistics from './PlayerStatistics';
import { X_PLAYER, O_PLAYER } from '../../constants/constants';

const GameStatistics = ({
  xPlayerWins,
  oPlayerWins
}) => (
  <View style={styles.container}>
    <PlayerStatistics wins={xPlayerWins} player={X_PLAYER} />
    <PlayerStatistics wins={oPlayerWins} player={O_PLAYER} />
  </View>
);

const mapStateToProps = (state) => ({
  xPlayerWins: state.gameState.stats.xPlayer,
  oPlayerWins: state.gameState.stats.oPlayer,
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default connect(mapStateToProps, null)(GameStatistics);
