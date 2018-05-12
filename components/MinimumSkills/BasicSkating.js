import React from 'react';
import {
  View,
  Text,
  Tile,
  Subtitle,
  Icon,
  Divider,
} from '@shoutem/ui';

export default class BasicSkating extends React.Component {

  render() {
    return (
      <View>
        <Tile styleName="md-gutter">
          <Subtitle>Skating Posture</Subtitle>
          <Text styleName="multiline">
            Bends at knees and hips with shoulders back.
            Demonstrates stability, with center of gravity down and forward.
            Demonstrates ability to skate low with bent, flexible knees.
          </Text>
        </Tile>
        <Divider styleName="line" />
        <Tile styleName="md-gutter">
          <Subtitle>Stride</Subtitle>
          <Text styleName="multiline">
            Uses steady, confident, fluid strides.
            Uses both feet to push forward on straightaways.
            Shifts weight completely from foot to foot without stumbling.
          </Text>
        </Tile>
        <Divider styleName="line" />
        <Tile styleName="md-gutter">
          <Subtitle>Crossovers</Subtitle>
          <Text styleName="multiline">
            Performs smooth crossovers while skating straightaways and track turns.
            Uses both feet to push during crossovers.
            Performs reverse crossovers, crossing over the right foot to the outside of the track.
          </Text>
        </Tile>
        <Divider styleName="line" />
        <Tile styleName="md-gutter">
          <Subtitle>Speed and Endurance</Subtitle>
          <Text styleName="multiline">
            Skates at least 27 laps around regulation track within five minutes.
            Accelerates from a standstill to complete one lap within 13 seconds.
          </Text>
        </Tile>
        <Divider styleName="line" />
        <Tile styleName="md-gutter">
          <Subtitle>Stops</Subtitle>
          <Text styleName="multiline">
            Skater must come to a complete stop from a brisk pace within four seconds, using proper form and without losing balance.
          </Text>
        </Tile>
        <Divider styleName="line" />
        <Tile styleName="md-gutter">
          <Subtitle>T-Stop</Subtitle>
          <Text styleName="multiline">
            Balancing weight on one leg, other foot is turned at a 90° angle so the heel or arch of the turned foot is aligned with the heel of the other foot.
            Maintaining balance on one leg, applies smooth pressure with the turned foot using the two outside wheels, the two front wheels or all four wheels (does not use only the two inside wheels).
          </Text>
        </Tile>
        <Divider styleName="line" />
        <Tile styleName="md-gutter">
          <Subtitle>Plow stop</Subtitle>
          <Text styleName="multiline">
            Turns one or both feet so toes are pointing in and heels are pointing out.
            Upon completion of stop, feet are in a position that would allow resumed skating (feet are not spread so wide apart skater must adjust stance before resuming skating).
          </Text>
        </Tile>
        <Divider styleName="line" />
        <Tile styleName="md-gutter">
          <Subtitle>Other Skating Skills</Subtitle>
          <Text styleName="multiline">
            Performs one-foot glides with each foot for the length of the track turn and straightaway with good balance.
            In low stance with one foot completely off the floor, able to balance weight over the other foot for at least five seconds.
            Maintains speed sufficient to complete glide and does not flail limbs.
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            Propels self while keeping all eight wheels on the floor.
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            Moves easily and fluidly from one side of the track to the other.
            Performs smooth, quick lateral cuts, crossing the track at least four times on each straightaway and at least three times on each track turn.
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            Backwards skating within track boundaries.
            Maintains moderate pace skating backward around the entire track.
          </Text>
        </Tile>
        <Divider styleName="line" />
      </View>
    );
  }
}
