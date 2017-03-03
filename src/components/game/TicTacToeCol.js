import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

import { SIZE } from '../../constants/dimens';
import { X_PLAYER, O_PLAYER } from '../../constants/constants';

const TicTacToeCol = ({
  colState,
  col,
  onColumnClick,
}) => (

    <TouchableHighlight
      onPress={ shouldBtnDisabled(colState) ?
        null
        :
        () => {onColumnClick(col)} }
      style={[styles.default, getStyleState(colState)]}
      underlayColor="white"
      >
        <Text style={styles.text}>
          {getTextState(colState)}
        </Text>
    </TouchableHighlight>
)

const styles = StyleSheet.create({
  default: {
    height: SIZE,
    width: SIZE,
    margin: 3,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 2,
    shadowOpacity: 1.0
  },
  text: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    textShadowColor: '#F5FCFF',
    textShadowOffset: {
      width: 0,
      height: 1
    },
    textShadowRadius: 1,
  },
  defaultPlayer: {
      backgroundColor: '#EEEEEE',
  },
  xPlayer: {
    backgroundColor: 'tomato',
  },
  oPlayer: {
    backgroundColor: '#AEC6CF'
  }
});

/**
* Utility function
* Checks if the button should be disabled
* @param: state, which is pressed by either Player X or Player O, or neither
*/
const shouldBtnDisabled = (state) => {
  if(state == undefined) {
    return false;
  }

  return parseInt(state) === X_PLAYER ||
    parseInt(state) === O_PLAYER;
}

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

/**
* Utility function
* Chooses style according to column state
* @param: state, which is pressed by either Player X or Player O, or neither
*/
const getTextState = (state) => {
  if(state === undefined) {
    return "";
  }

  switch(parseInt(state)) {
    case X_PLAYER:
      return "X";

    case O_PLAYER:
      return "O";
  }
}

export default TicTacToeCol;
