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

export default class BalanceAndAgility extends React.Component {

  render() {
    const screenWidth = Dimensions.get('window').width;
    const videoWidth = screenWidth - 30;

    return (
      <View>
        <Row>
          <Text styleName="multiline">
            Skater must demonstrate the ability to perform the following tasks without losing balance, stumbling or falling.
          </Text>
        </Row>
        <Divider styleName="line" />
        <Tile styleName="md-gutter">
          <Subtitle>Standing and Stepping from a Standstill, Maintaining Control of Wheels (not rolling)</Subtitle>
          <Text styleName="multiline">
            Forward and backward.{'\n'}
            Side to side in both directions.{'\n'}
            Grapevine (first foot side steps, second foot steps across and in front of first foot, first foot side steps, second foot steps behind and crosses first foot) to both the right and left.{'\n'}
            Shuffle (first foot side steps, second foot steps to meet first foot without crossing first foot, first foot immediately side steps in a hopping motion) to both the right and left.{'\n'}
            Quick steps (both feet rapidly alternate in small steps, only one foot is on the ground at a time) in place and to the right and left.
            Ability to balance on each foot from a stationary position at least 30 seconds.
          </Text>
        </Tile>
        <Divider styleName="line" />
        <Tile styleName="md-gutter">
          <Subtitle>Hopping</Subtitle>
          <Text styleName="multiline">
            Hops over an object at least six inches (15 centimeters) in height without touching the object or losing balance, while skating at a moderate pace.{'\n'}
            Jumps with both feet simultaneously, but does not have to land with both feet simultaneously.{'\n'}
            Hops laterally at least 18 inches (45.5 centimeters) from a brisk forward speed.
          </Text>
          <Divider styleName="empty" />
          <Video
            source={{ uri: 'https://www.youtube.com/watch?v=VwNLLnoymi8' }}
            height={200}
            width={videoWidth}
            styleName="container"
          />
        </Tile>
        <Divider styleName="line" />
        <Tile styleName="md-gutter">
          <Subtitle>Focus</Subtitle>
          <Text styleName="multiline">
            Comfortably looks left, right, and behind quickly and unexpectedly while maintaining regular skating stride at a moderate pace.
          </Text>
          <Divider styleName="empty" />
          <Video
            source={{ uri: 'https://www.youtube.com/watch?v=4Lzjelw26FM' }}
            height={200}
            width={videoWidth}
            styleName="container"
          />
        </Tile>
        <Divider styleName="line" />
        <Tile styleName="md-gutter">
          <Subtitle>Weaving</Subtitle>
          <Text styleName="multiline">
            Maneuvers through 10 cones, each no more than five feet (1.5 meters) apart (not to exceed 50 feet or 15 meters), placed through the straightaways and track turns, in less than six seconds.{'\n'}
            Weaves comfortably and briskly through a moderately moving pack of skaters without focusing on their own feet.
          </Text>
          <Divider styleName="empty" />
          <Video
            source={{ uri: 'https://www.youtube.com/watch?v=RcAwF6VH26c' }}
            height={200}
            width={videoWidth}
            styleName="container"
          />
        </Tile>
        <Divider styleName="line" />
        <Tile styleName="md-gutter">
          <Subtitle>Transitions</Subtitle>
          <Text styleName="multiline">
            Turns 180° without breaking stride, maintaining a moderate pace.{'\n'}
            Turns clockwise and counterclockwise from front to back.{'\n'}
            Turns clockwise and counterclockwise from back to front.{'\n'}
            Turns 360° without breaking stride, from a moderate pace. Using two 180° turns in a row, without breaking stride, is acceptable.
          </Text>
          <Divider styleName="empty" />
          <Video
            source={{ uri: 'https://www.youtube.com/watch?v=qwWLe6qGvwo' }}
            height={200}
            width={videoWidth}
            styleName="container"
          />
        </Tile>
      </View>
    );
  }
}
