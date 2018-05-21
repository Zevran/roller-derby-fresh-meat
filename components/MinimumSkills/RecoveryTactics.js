import React from 'react';
import { Dimensions } from 'react-native';
import {
  View,
  Row,
  Text,
  Tile,
  Subtitle,
  Divider,
  Video
} from '@shoutem/ui';

export default class RecoveryTactics extends React.Component {

  render() {
    const screenWidth = Dimensions.get('window').width;
    const videoWidth = screenWidth - 30;

    return (
      <View>
        <Row>
          <Text styleName="multiline">
            Skater must perform the following falls safely, correctly and naturally. Skaters must be able to slide into knee contact with the floor, rather than crashing onto pads. Slides should be performed from a brisk pace without using hands or flailing arms. Recovery to a normal skating pace should be smooth and immediate, unless noted otherwise.
          </Text>
        </Row>
        <Divider styleName="line" />
        <Tile styleName="md-gutter">
          <Subtitle>Knee Taps</Subtitle>
          <Text styleName="multiline">
            Left.{'\n'}
            Right.{'\n'}
            Performs each knee tap without coming to a complete stop.{'\n'}
            Taps a single knee without breaking normal skating stride.{'\n'}
            Recovers from knee tap without using hands to get up.{'\n'}
            Performs two consecutive single knee taps in stride, with low recovery.
          </Text>
          <Divider styleName="empty" />
          <Video
            source={{ uri: 'https://www.youtube.com/watch?v=mOtKiL8I2-I' }}
            height={200}
            width={videoWidth}
            styleName="container"
          />
        </Tile>
        <Divider styleName="line" />
        <Tile styleName="md-gutter">
          <Subtitle>Double Knee Slides</Subtitle>
          <Text styleName="multiline">
            Knees do not make contact with ground at exact same time.{'\n'}
            Returns to active skating within three seconds.{'\n'}
            Recovers without using hands to get up.{'\n'}
            Momentum used to initiate the slide is continued into the recovery to normal skating motion.
          </Text>
          <Divider styleName="empty" />
          <Video
            source={{ uri: 'https://www.youtube.com/watch?v=zjRWjHb3240' }}
            height={200}
            width={videoWidth}
            styleName="container"
          />
        </Tile>
      </View>
    );
  }
}
