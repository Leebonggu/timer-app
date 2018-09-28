import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Button from '../Button';

function formatTime(time) {
  let minutes = Math.floor(time/60);
  time -= minutes * 60;
  let seconds = parseInt(time % 60, 10);
  return `${minutes < 10 ? `0${minutes} ` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

class Timer extends Component {
  
  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    if(!currentProps.isPlaying && nextProps.isPlaying) {
      const timerInterval = setInterval(() => {
        currentProps.addSecond()
      }, 1000);
      this.setState({timerInterval})
      // start the interval
    } else if(currentProps.isPlaying && !nextProps.isPlaying) {
      clearInterval(this.state.timerInterval);
    }
  }

  render() {
    const { 
      isPlaying, 
      elapsedTime, 
      timerDuration, 
      startTimer, 
      restartTimer,
      addSecond 
    } = this.props;

    return(
      <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
        <View style={styles.upper}>
          <Text style={styles.subject}>1시간 빡일하자</Text>
          <Text style={styles.time}>
            {!isPlaying ? 'PLAY' : formatTime(timerDuration - elapsedTime)}
          </Text>
        </View>
        <View style={styles.lower}>
        {!isPlaying && (
         <Button iconName="play-circle" onPress={startTimer}/>
        )}
        {isPlaying && (
         <Button iconName="stop-circle" onPress={restartTimer}/>
        )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CE0B24'

  },
  upper: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  lower: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  time: {
    color: 'white',
    fontSize: 90,
    fontWeight: '300'
  },
  subject: {
    color: 'white',
    fontSize: 40
  }
})

export default Timer;