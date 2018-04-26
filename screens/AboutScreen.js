import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MonoText } from '../components/StyledText';

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'About',
  };

  render() {
    return (
      <View style={styles.tabBarInfoContainer}>
        <MonoText>
          This application is developed by Gaël Reyrol, fresh meat of Caen Men's Roller Derby.
        </MonoText>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  tabBarInfoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  }
})
