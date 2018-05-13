import React from 'react';
import { View, Text, Divider } from '@shoutem/ui';

export default class Summary extends React.Component {

  render() {
    return (
      <View>
        <Text styleName="multiline">
          The game of Flat Track Roller Derby is played on a flat, oval track. Play is broken up into two 30-minute periods, and within those periods, into units of play called “Jams,” which last up to two minutes. There are 30 seconds between each Jam.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          During a Jam, each team fields up to five Skaters. Four of these Skaters are called “Blockers” (together, the Blockers are called the “Pack”), and one is called a “Jammer.” The Jammer wears a helmet cover with a star on it.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          The two Jammers start each Jam behind the Pack, and score a point for every opponent they lap, each lap. Because they start behind the Pack, they must get through the Pack, then all the way around the track to be ready to score points on opposing Blockers.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          Roller derby is a full-contact sport; however, Skaters cannot use their heads, elbows, forearms, hands, knees, lower legs, or feet to make contact to opponents. Skaters cannot make contact to opponents’ heads, backs, knees, lower legs, or feet.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          Play that is unsafe or illegal may result in a Skater being assessed a penalty, which is served by sitting in the Penalty Box for 30 seconds of Jam time.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          The team with the most points at the end of the game wins.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          A common Jam might go like this:
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          1. Blockers line up behind the Pivot Line and in front of the Jammer Line.{'\n'}
          2. Jammers line up behind the Jammer Line.{'\n'}
          3. At the Jam-Starting Whistle, the Blockers skate forward and compete for superior position. The Jammers skate forward and try to get through the Pack. Each Blocker simultaneously tries to prevent the opposing Jammer from getting past, and to help their own Jammer get through.{'\n'}
          4. One Jammer exits the Pack and is declared Lead Jammer, earning the right to end the Jam when they decide. This Jammer races around the track to get into scoring position.{'\n'}
          5. The same Jammer begins to work their way through the Pack for the second time, and the opposing Jammer makes their way out of the Pack for the first time.{'\n'}
          6. As the second Jammer to escape the Pack comes around into scoring position, the first Jammer calls off the Jam.{'\n'}
          7. The first Jammer has scored several points (up to four), and held their opponent at zero points. Meanwhile, the opposing Jammer (by getting into scoring position) held the first Jammer at only those points, as they could have scored more points on subsequent passes.{'\n'}
        </Text>
      </View>
    );
  }
}
