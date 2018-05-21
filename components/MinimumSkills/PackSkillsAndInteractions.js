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

export default class PackSkillsAndInteractions extends React.Component {

  render() {
    const screenWidth = Dimensions.get('window').width;
    const videoWidth = screenWidth - 30;

    return (
      <View>
        <Row>
          <Text styleName="multiline">
            Skaters must demonstrate the ability to perform the following skills legally, safely, and without losing balance, stumbling, or falling, while skating at a moderate pace.
          </Text>
        </Row>
        <Divider styleName="line" />
        <Tile styleName="md-gutter">
          <Subtitle>Whips</Subtitle>
          <Text styleName="multiline">
            Giving and receiving arm whips.{'\n'}
            Giving an inside whip, the initiating skater holds their right arm against their body, providing a hand as a “handle” for the receiver to grab and pull. The initiator does not attempt to pull from the shoulder. The initiator may use the left hand to push the receiving skater.{'\n'}
            Giving outside whip, the initiating skater positions body with one foot extended in front of the other, and extends right arm to receiver. The receiving skater grasps the initiator’s hand with their own right hand. The initiator of the whip, using core abdominal muscles, not the shoulder muscles, pulls the receiver, transferring momentum to the skater being whipped.{'\n'}
            Taking and providing hip, belt and clothing whips.{'\n'}
            Consistently demonstrates the ability, judgment and timing to take a whip off another skater’s body or clothing without pulling the other skater off-balance.{'\n'}
            Consistently demonstrates the stability to provide hip and clothing whips without getting pulled off-balance.
          </Text>
          <Divider styleName="empty" />
          <Video
            source={{ uri: 'https://www.youtube.com/watch?v=2z7le6fKd1I' }}
            height={200}
            width={videoWidth}
            styleName="container"
          />
        </Tile>
        <Divider styleName="line" />
        <Tile styleName="md-gutter">
          <Subtitle>Pushes</Subtitle>
          <Text styleName="multiline">
            Giving pushes.{'\n'}
            Pushes receiving skater near receiver’s center of gravity (hips or buttocks) with ample force to provide noticeable change in receiving skater’s direction of momentum.{'\n'}
            Pushes are centered and even (does not turn receiving skater’s hips).{'\n'}
            Pushes are parallel to the floor (does not push up, causing the receiver to be pushed off their feet, or down, causing the receiver to be pushed to the floor).{'\n'}
            Maintains form and balance before, during and after pushing receiving skater.{'\n'}
            Receiving pushes.{'\n'}
            Uses momentum provided from a forward push to accelerate and begins skating within two seconds of push.{'\n'}
            Maintains form and balance while receiving push forward, to left and/or right.{'\n'}
          </Text>
          <Divider styleName="empty" />
          <Video
            source={{ uri: 'https://www.youtube.com/watch?v=tQ0SA7EhbfE' }}
            height={200}
            width={videoWidth}
            styleName="container"
          />
        </Tile>
        <Divider styleName="line" />
        <Tile styleName="md-gutter">
          <Subtitle>Pacing</Subtitle>
          <Text styleName="multiline">
            Adjusts to the variable speeds (decrease/increase) of a pace line while maintaining an arms-length distance from other skaters without falling, tripping, overtaking or running into another skater.
          </Text>
          <Divider styleName="empty" />
          <Video
            source={{ uri: 'https://www.youtube.com/watch?v=29_MYCKvE9k' }}
            height={200}
            width={videoWidth}
            styleName="container"
          />
        </Tile>
        <Divider styleName="line" />
        <Tile styleName="md-gutter">
          <Subtitle>Weaving Around Moving Obstacles</Subtitle>
          <Text styleName="multiline">
            Demonstrates weaving through a single-file line of skaters, each an arm’s length apart, at amoderate pace.
          </Text>
          <Divider styleName="empty" />
          <Video
            source={{ uri: 'https://www.youtube.com/watch?v=LAg4fRwJCjw' }}
            height={200}
            width={videoWidth}
            styleName="container"
          />
        </Tile>
        <Divider styleName="line" />
        <Tile styleName="md-gutter">
          <Subtitle>Unexpected Obstacles</Subtitle>
          <Text styleName="multiline">
            Testing all skaters in a pack of 4-10 moving at a moderate pace. All skaters demonstrate the ability to perform safe knee taps and slides at unexpected times in the pack. Pack skaters must avoid the downed skater(s) without going out of bounds, falling over them or causing unnecessary hazard.{'\n'}
            Demonstrates the ability to recover balance after bumping skates or locking wheels with another skater.
          </Text>
          <Divider styleName="empty" />
          <Video
            source={{ uri: 'https://www.youtube.com/watch?v=4K5TsoOEhFo' }}
            height={200}
            width={videoWidth}
            styleName="container"
          />
        </Tile>
      </View>
    );
  }
}
