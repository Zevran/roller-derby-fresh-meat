import React from 'react';
import { View, Title, Subtitle, Text, Divider } from '@shoutem/ui';

export default class GameParametersAndSafety extends React.Component {

  render() {
    return (
      <View>
        <Title>
          1.1. Timing
        </Title>
        <Text styleName="multiline bold">
          A game lasts for 60 minutes of play, divided into two 30-minute periods with a halftime between them.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          Periods are broken into Jams, which are the basic unit of play for roller derby.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline bold">
          A Jam can last up to two minutes.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          Jams may be called off prior to two minutes as part of gameplay, as described below. Each Jam starts with a single short whistle blast, and finishes at the end of a series of four short whistle blasts. At least 30 seconds must elapse between Jams. More than 30 seconds may not elapse unless a timeout is called.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline bold">
          A period starts on the Jam-Starting Whistle of the first Jam for that period.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          The period clock does not stop between Jams unless a timeout is called. If the period clock reaches zero before the next Jam has started, the period ends at that moment; otherwise, the period ends at the conclusion of the final Jam for the period. If what would have been the last Jam of a game ends due to officiating error with no time remaining on the period clock, the Officials may determine that another Jam will be run; such a Jam will have the same form (overtime or not; see below) as the Jam that ended unnaturally and be part of the same period.
        </Text>
        <Divider styleName="empty" />
        <Title>
          1.2. Teams
        </Title>
        <Text styleName="multiline bold">
          A team is comprised of Skaters, who must be uniquely identified by a roster number.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          Each team must have a jersey of the same base color, such that uniform colors of the two teams playing are of high contrast. Roster numbers must be clearly displayed on a skater’s back and upper arm area. Each team must have helmet covers to clearly indicate who their Jammer and Pivot are. The Jammer and Pivot helmet covers for the two teams must be easy to differentiate.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline bold">
          Skaters must wear “quad” style roller skates and protective gear during play.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          Inline skates are not permitted. Protective gear may not be removed during play. Protective gear may not impair or interfere with the safety or play of other Skaters, support staff, or Officials.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline bold">
          Skaters who are injured during play may return to play as long as they are no longer apparently injured or bleeding.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          A Skater whose injury alters the flow of the game (examples include a Jam being called, a period clock stoppage, or a substitute being seated in the Penalty Box) may not participate during the following three Jams. A Skater whose injury alters the flow of the game more than once may not participate as a Skater for the rest of that period. The Head Referee may also declare that a team has forfeited the game if that team has five or fewer Skaters eligible to participate, or refuses to field Skaters on the track to continue play.
        </Text>
        <Divider styleName="empty" />
        <Title>
          1.3. Timeouts
        </Title>
        <Divider styleName="empty" />
        <Text styleName="multiline bold">
          Teams and Officials may stop the period clock by calling a timeout.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          Timeouts may only be called between Jams, though Officials may end a Jam so they may call an Official timeout. The beginning of a timeout is marked by four short whistle blasts, and the end of a timeout is marked by a long rolling whistle, after which the next Jam begins as soon as possible if there is time remaining on the period clock. At most, 30 seconds may pass before the next Jam begins. The period clock starts again at the Jam-Starting Whistle.
        </Text>
        <Divider styleName="empty" />
        <Text>
          There are three types of timeouts.
        </Text>
        <Divider styleName="empty" />
        <Subtitle>
          1.3.1. Team Timeouts
        </Subtitle>
        <Text styleName="multiline bold">
          Each team has three timeouts that they can take during the game.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          Team Timeouts may be taken only by the team’s Captain or Designated Alternate. Penalized Captains or Designated Alternates cannot take a Team Timeout. Team Timeouts last for 60 seconds.
        </Text>
        <Divider styleName="empty" />
        <Subtitle>
          1.3.2. Official Reviews
        </Subtitle>
        <Text styleName="multiline bold">
          Each team may request that the Officials review a decision.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          To do this, a team’s Captain or Designated Alternate formally requests a review of a specific officiating decision made during the prior Jam, or during the lineup time preceding the prior Jam. The Head Referee investigates the review with other Officials, and uses the information gathered to render a decision on the item under review, as well as related decisions. The Head Referee then announces their findings and any changes that result from the review to both teams’ representatives. This decision is final.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          If the Head Referee determines that an officiating error was made in relation to the situation under review, the team will retain the privilege to call an additional review later in the same period. The review can be retained in this manner only once per period.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          A team may also elect to use their Official Review as a Team Timeout. In this case, the review will not be retained. Penalized Captains or Designated Alternates cannot request an Official Review.
        </Text>
        <Divider styleName="empty" />
        <Subtitle>
          1.3.3. Official Timeouts
        </Subtitle>
        <Text styleName="multiline bold">
          Officials may take a timeout in order to ensure that the game is running smoothly and correctly.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          If the prior Jam ended with less than 30 seconds on the period clock, the fact that the Officials called a timeout will not necessarily result in another Jam occurring in the same manner that a Team Timeout or Official Review would. Instead, the Officials must determine whether or not there is reason to hold another Jam for that period. If the Officials determine that there is no reason to hold another Jam, both teams must be given a chance to call a Team Timeout or Official Review (if they have any remaining). If they decline, the period will end.
        </Text>
        <Divider styleName="empty" />
        <Title>
          1.4. Game Information
        </Title>
        <Text styleName="multiline bold">
          Critical game information must be displayed in a manner that is highly visible to Teams, Officials, and spectators.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          This displayed critical game information is considered official, and must include, at a minimum:
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          - the period clock{'\n'}
          - the Jam clock{'\n'}
          - the Official Score{'\n'}
        </Text>
        <Text styleName="multiline">
          Errors in timing or score should be updated as quickly as possible. If an error persists for an extended period of time, it should be corrected only if the correction itself would have minimal impact on the game.
        </Text>
        <Divider styleName="empty" />
        <Title>
          1.5. Winning
        </Title>
        <Text styleName="multiline bold">
          The team with the most points at the end of the game wins.
        </Text>
        <Divider styleName="empty" />
        <Subtitle>
          1.5.1. Overtime
        </Subtitle>
        <Text styleName="multiline bold">
          If the game ends with the score tied, the second period will be extended by at least one additional Jam.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          This Overtime Jam is like any other Jam, with two exceptions:
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          - no Lead Jammer is declared{'\n'}
          - both Jammers begin scoring on their first trip through the Pack
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          More Jams will be added in this manner until a Jam ends with the score no longer tied.
        </Text>
      </View>
    );
  }
}
