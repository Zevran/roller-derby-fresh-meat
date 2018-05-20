import React from 'react';
import {
  View,
  Row,
  Text,
  Tile,
  Subtitle,
  Divider
} from '@shoutem/ui';

export default class Blocking extends React.Component {

  render() {
    return (
      <View>
        <Row>
          <Text styleName="multiline">
            Skater must demonstrate the ability to perform the following skills without fouling other skaters while skating at a moderate pace.
          </Text>
        </Row>
        <Divider styleName="line" />
        <Tile styleName="md-gutter">
          <Subtitle>Taking Hits</Subtitle>
          <Text styleName="multiline">
            Responds safely to repeated heavy blocks without flailing or grabbing other skaters. If the hit knocks the skater off balance, they fall safely, without sprawling, and demonstrate an ability to recover within two to four seconds.{'\n'}
            Demonstrates the above in a pack situation, without causing an unnecessary hazard for pack skaters.
          </Text>
        </Tile>
        <Divider styleName="line" />
        <Tile styleName="md-gutter">
          <Subtitle>Positional Blocking and Leaning (aka frontal blocking or stall blocking)</Subtitle>
          <Text styleName="multiline">
            Performs contact with good posture and without loss of balance.{'\n'}
            Demonstrates ability to lean and push on an opponent with legal blocking zones to legal target zones while moving at moderate pack speed.{'\n'}
            Demonstrate ability to plow stop in a pack without tripping other skaters in the pack.{'\n'}
            Demonstrate ability to use a plow stop to slow another skater.{'\n'}
            Must be no more than two feet (0.5 meters) in front of other skater.{'\n'}
            Other skater must have demonstrated decrease in pace due to blocking skater’s positioning and/or contact
          </Text>
        </Tile>
        <Divider styleName="line" />
        <Tile styleName="md-gutter">
          <Subtitle>Checks</Subtitle>
          <Text styleName="multiline">
            Demonstrates the ability to perform repetitive hip and body checks delivered with legal blocking zones to legal target zones with moderate to heavy force while skating at a brisk pace.
          </Text>
        </Tile>
      </View>
    );
  }
}
