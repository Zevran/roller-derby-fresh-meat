import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, Title, Button, Icon, Subtitle, Text, Divider } from '@shoutem/ui';

class Officiating extends React.Component {

  render() {
    return (
      <View>
        <Title>5.1. Staffing</Title>
        <Text styleName="multiline bold">
          Each game must staff enough on-skates Officials (Referees) to effectively track the following information in real time:
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline bold">
          - the location of the Pack and Engagement Zone{'\n'}
          - which Blockers are out of play{'\n'}
          - who the Jammers are{'\n'}
          - which Jammer (if any) is Lead Jammer{'\n'}
          - how many points each Jammer has scored
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          One Referee is designated the Head Referee.
        </Text>
        <Divider styleName="empty" />
        <Subtitle>5.1.1. Distinction</Subtitle>
        <Text styleName="multiline bold">
          Referees are responsible for assessing and enforcing penalties, must be on skates, and must be uniformed in a manner that clearly identifies them as Referees.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          Referees must be distinguishable from each other; for example, by displaying a name or number on their uniform.
        </Text>
        <Divider styleName="empty" />
        <Subtitle>5.1.2. Requirements</Subtitle>
        <Text styleName="multiline bold">
          Each game must also staff enough Officials to effectively track the state of the game such that the rules can be enforced in real time.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          The number and position of Officials may vary based on available technology and the limitations of the venue, but the following information must be available upon request:
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline bold">
          - the Official Score{'\n'}
          - the Official Jam Time{'\n'}
          - the Official Period Time{'\n'}
          - which Skaters have been assessed how many penalties, and which have been served{'\n'}
          - which Skaters are not allowed to skate (for example, due to expulsion, fouling out, or having a Jam called for their injury){'\n'}
          - how long a given Skater has been seated for each penalty
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          Individual Officials may be assigned to multiple tasks so long as this does not threaten the accuracy of the above information.
        </Text>
        <Divider styleName="empty" />
        <Title>5.2. Duties</Title>
        <Text styleName="multiline bold">
          All Officials are responsible for keeping the game running safely and smoothly by ensuring that the rules of the game are followed.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          This includes but is not limited to:
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline bold">
          - ensuring that each team has an acceptable number of Skaters on the track{'\n'}
          - ensuring that each team has an acceptable number of Skaters in certain positions on the track{'\n'}
          - ensuring that the game is played legally{'\n'}
          - timing Jams, periods, penalties, and the time between Jams (including timeouts and reviews){'\n'}
          - signalling the starts and ends of Jams{'\n'}
          - signalling who is the Lead Jammer{'\n'}
          - signalling how many points each Jammer earns on each trip through the Pack{'\n'}
          - informing Skaters and Team Staff of the state of the game when asked (to the best of their ability given the constraints of their responsibilities){'\n'}
          - calling Official Timeouts when additional time is needed. This may include a need to ensure that:{'\n'}
            - game information has been correctly recorded{'\n'}
            - gameplay is safe{'\n'}
            - injured Skaters have been taken care of{'\n'}
            - the teams are informed regarding anything out of order
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          Officials may call off Jams at their discretion. Reasons may include but are not limited to injury, technical difficulty, interference in a Jam by spectators or other Skaters, unsafe play, or illegal play that cannot be rectified via penalty assessment. If a Jam is called off due to officiating discretion when less than 30 seconds remain on the period clock at the end of the game, an additional Jam may be played at the discretion of the Officials. This additional Jam is the same type as the prior Jam (for example, an Overtime Jam follows a previous Overtime Jam).
        </Text>
        <Divider styleName="empty" />
        <Title>5.3. Communication Between Skaters & Officials</Title>
        <Text styleName="multiline bold">
          All communication between Skaters, Team Staff, and Officials must be respectful.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline bold">
          Officials should provide any information necessary for a Skater to know whether they are in play, including the location of the Pack.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          Skaters who reasonably believe that they are in play should not be penalized for technical infractions that pertain to being out of play, unless such a warning has been given (examples include failure to return to play, to reform a Pack, or to yield after committing a false start).
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline bold">
          If an Official provides erroneous information to a Skater, the Skater will not be penalized for actions taken based on that information.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          For example, if a Penalty Box Official releases a Skater early, the Skater will not be penalized for leaving once released. Likewise, if a Jammer calls off a Jam while their Jammer Referee is indicating that they are the Lead Jammer, said Jammer will not be penalized for calling off the Jam illegally, even if they are not in fact Lead. An absence of information provided (for example, an Official not providing a warning) is not considered as erroneous.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline bold">
          The Head Referee may, at their discretion, limit the extent to which Skaters may communicate with Officials.
        </Text>
        <Divider styleName="empty" />
        <Title>5.4. Assessing Penalties</Title>
        <Text styleName="multiline bold">
          All Referees may assess penalties to Skaters for illegal actions that have impact on the game.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          Non-Skating Officials may assess penalties that are relevant to their position in the game, unless prohibited from doing so by the Head Referee. Officials will use their judgment under the guidelines set forth in the Rules of Flat Track Roller Derby Casebook. They must do so as soon as possible and at a volume sufficient to be heard by the penalized Skater and relevant Officials given the constraints of the venue. Until this has occurred, nobody is required to behave as if the Skater has been penalized.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline bold">
          No penalty should be assessed unless the Official is certain that the penalty is warranted.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          If Officials cannot agree on whether an action warrants a penalty, the Head Referee’s decision is final.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          If the only Blocker from a team who is on the track commits a penalty, the Blocker should not be sent off the track until another Blocker from their team rejoins the Pack.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline bold">
          If a penalty is warranted, but it is not clear to whom the penalty should be assessed, an Official should assess the penalty to the nearest Blocker from the appropriate team if the action is committed mid-Jam, or to the team’s Captain if the action is committed between Jams. If an Official is not certain which team is responsible, no penalty should be assessed. If off-skates support staff commit a penalty, the penalty should be assessed to the appropriate team’s Captain. If a penalty is assessed to the Captain due to the fact that they are Captain, they will serve the penalty as a Blocker in a following Jam.
        </Text>
        <Divider styleName="empty" />
        <Button onPress={() => {
            const content = require('../../assets/json/usecases/en/5-4-0.json').scenarios;
            this.props.navigation.navigate('UseCases', {
              title: 'Assessing Penalties',
              content
            });
          }}>
          <Text>VIEW USE CASES</Text>
          <Icon name="right-arrow" />
        </Button>
      </View>
    );
  }
}

export default withNavigation(Officiating);
