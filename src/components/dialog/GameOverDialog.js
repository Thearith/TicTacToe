import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import PopUpDialog, { SlideAnimation } from 'react-native-popup-dialog';

import { resetAction } from '../../actions/actionCreators';
import { getPlayerName } from '../../constants/constants';

/**
* A winning dialog
*/
class WinDialog extends Component {
  constructor(props) {
    super(props);

    this.getCongratsMsg  = this.getCongratsMsg.bind(this);
  }

  getCongratsMsg() {
    return getPlayerName(this.props.winner) + " is a winner!!";
  }

  render() {
    const { winner } = this.props;
    return (
      <View>
          {
            Alert.alert(
              null,
              this.getCongratsMsg(),
              [
                {text: 'OK', onPress: () => this.props.callResetGame()},
              ]
            )
          }
      </View>
    );
  }
}

/**
* A Draw dialog
*/
class DrawDialog extends Component {
  constructor(props) {
    super(props);

    this.getDrawMsg  = this.getDrawMsg.bind(this);
  }

  getDrawMsg() {
    return "This game is a draw";
  }

  render() {
    const { winner } = this.props;
    return (
      <View>
          {
            Alert.alert(
              null,
              this.getDrawMsg(),
              [
                {text: 'OK', onPress: () => this.props.callResetGame()},
              ]
            )
          }
      </View>
    );
  }
}


/**
* The Dialog container
* Decides whether it should be a winning or draw dialog
*/
const GameOverDialog = ({
  winner,
  isDraw,
  callResetGame
}) => (
  <View style={styles.container}>
    {isDraw ?
      <DrawDialog callResetGame={callResetGame}/>
      :
      <WinDialog winner={winner} callResetGame={callResetGame}/>
    }
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

const mapDispatchToProps = (dispatch) => ({
  callResetGame: () => {
    dispatch(resetAction());
  }
});

export default connect(null, mapDispatchToProps)(GameOverDialog);
