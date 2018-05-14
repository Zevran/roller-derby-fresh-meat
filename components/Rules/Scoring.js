import React from 'react';
import { View, Title, Subtitle, Text, Divider } from '@shoutem/ui';

export default class Scoring extends React.Component {

  render() {
    return (
      <View>
# 3. Scoring{'\n'}{'\n'}

## 3.1. Earning Points{'\n'}{'\n'}

**Jammers score one point every time they lap an opponent.** A Jammer laps an opponent if they pass that opponent twice in a row (without that opponent having passed that Jammer), but score a point only if the lapping pass is earned (see Section 2.5). Whichever Jammer is foremost at the Jam’s start is considered to be in position to lap the opposing Jammer. Points are scored when lapping an opponent, regardless of position changes such as Star Passes - points are scored on opponents, not their designated positions. If an opponent is lapped but a point is not scored (because the lapping pass was not earned), the Jammer may yield position to that opponent and re-pass them, earning a pass, to score on that opponent.{'\n'}{'\n'}

All Blockers are considered to be on the same trip, including former Jammers who have passed the Star.{'\n'}{'\n'}

## 3.2. Scoring Trips{'\n'}{'\n'}

**Points are grouped by trips through the Pack.** One trip through the Pack ends, and the next begins, when the Jammer exits the front of the Engagement Zone. Upon completion of a trip through the Pack, the Jammer’s score for that trip can no longer be altered by dropping back to re-pass any opponents the Jammer did not score upon on that trip.{'\n'}{'\n'}

If a Jammer enters the Engagement Zone from the **front**, they return to their previous trip until they exit the Engagement Zone from the front again. A Jammer cannot, however, fall behind by more than one trip. Whenever a Jammer exits the Engagement Zone from the front, they return to their latest trip. If a Jammer falls behind their initial trip through the Pack, passes on Blockers do not count toward scoring or lapping until they return to their initial trip through the Pack.{'\n'}{'\n'}

When a Jam ends, whatever trip the Jammers are on is considered to have been “completed” by the Jam ending.{'\n'}{'\n'}

## 3.3. Scoring Avoidance{'\n'}{'\n'}

**Opponents can only avoid being scored upon by remaining ahead of the Jammer, or by ensuring that when they are passed, the pass is not earned.** If a Jammer completes a trip through the Pack without the opportunity to earn a pass on an opponent, the Jammer is said to have earned a pass on that opponent. This includes but is not limited to:{'\n'}{'\n'}

- opponents who are ahead of the Engagement Zone when the Jammer completes their trip through the pack, via the jam ending or the Jammer exiting the front of the Engagement Zone{'\n'}{'\n'}
- any **Not-On-the-Track Point** (see Section 2.5) that the Jammer cannot earn because they complete their trip through the Pack without the opportunity to earn a pass on **any** opposing Blocker (which would earn them a pass on the off-the-track opponents){'\n'}{'\n'}
- opponents who are out of play behind the Pack, if a Jammer re-enters the track from the Penalty Box in front of that Blocker{'\n'}{'\n'}

**If a Jammer renders themself unable to score points–for example, by committing a penalty or by removing the Star–any not-on-the-track points they would have earned while unable to score are earned once they become able to score again.** If an Opponent’s action renders the Jammer unable to score–for example, a Jammer who is blocked out of bounds–the Jammer continues to score not-on-the-track points as usual.{'\n'}{'\n'}

## 3.4. Penalized Jammers{'\n'}{'\n'}

**When a Skater is penalized, they are considered to no longer be on the track** (even if they are physically still on the track). Accordingly, a penalized Jammer cannot lap any further opponents until that Jammer completes their penalty. Upon penalization, there is no longer lapping position between the Jammers until both the Jammers are in gameplay. Upon release from the Penalty Box, a Jammer returns to the same trip through the Pack, having scored on (and/or being in position to score on) the same Blockers.{'\n'}{'\n'}

## 3.5. Errors in Scoring & Score Reporting{'\n'}{'\n'}

**The Official Score is that which is reported and visible to teams, Officials, and spectators.** If a point is awarded (or denied) in error, or if a Jammer Referee has reported a score incorrectly, the score may be corrected no later than the end of the Jam after the one in which the error occurred. Errors made during the last 2 minutes of the game may only be corrected before the start (rather than the end) of the Jam after which the error occurred.{'\n'}{'\n'}

However, points awarded (or denied) correctly, given the information available at the time, may not be taken away (or awarded) later. For example, a Jammer who exits the Engagement Zone and is awarded four points has earned those points, even if upon review they were found to have committed a penalty two trips prior (and thus would not have been able to earn those points).{'\n'}{'\n'}

See **Points Awarded in Error** and **Points Denied in Error**{'\n'}{'\n'}
      </View>
    );
  }
}
