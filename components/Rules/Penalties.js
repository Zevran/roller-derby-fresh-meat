import React from 'react';
import { View, Title, Subtitle, Text, Divider } from '@shoutem/ui';

export default class Penalties extends React.Component {

  render() {
    return (
      <View>
        <Text styleName="multiline bold">
          When a Skater commits a rule infraction or a foul, a penalty may be assessed as a punishment, handicap, or loss of advantage.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          Penalties are applied to both a Skater and the position that Skater is currently playing.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          Officials signal and enforce penalties and warnings as they occur during a game. Penalties should not be assessed for actions that have little to no impact on the game or the Skaters.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          The following types of penalties are addressed in detail in the sections listed below and in the Rules of Flat Track Roller Derby Casebook. These sections hold specific examples that are to be followed explicitly.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          Illegal actions that do not fall cleanly into one of the categories below should be penalized using these descriptions and examples as guidelines.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          If one Skater’s illegal action causes an opponent to unavoidably commit another illegal action, the opponent will not receive a penalty for the unavoidable illegal action. The initial Skater should be penalized if the initial illegal action has sufficient impact on the game.
        </Text>
        <Divider styleName="empty" />
        <Title>
          4.1. Contact Penalties
        </Title>
        <Text styleName="multiline bold">
          Gaining position on an opponent, or causing an opponent to lose position to another teammate, due to illegal contact is always considered to have sufficient impact on the game.
        </Text>
        <Divider styleName="empty" />
        <Subtitle>
          4.1.1. Impact to an Illegal Target Zone
        </Subtitle>
        <Text styleName="multiline bold">
          Making contact to an illegal target zone should be penalized based on the impact it has on the target. (see Section 2.4.1)
        </Text>
        <Divider styleName="empty" />
        <Text>
          Illegal target zones include:
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          - Back of the body, including the back of the buttocks and the back of the thighs{'\n'}
          - Head, down to the collarbone{'\n'}
          - Below mid-thigh
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          For safety reasons, any forceful contact to the head or neck should be penalized regardless of impact.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          A Skater suddenly presenting an illegal target zone to an opponent, giving that opponent no reasonable opportunity to avoid illegal contact, is considered to be initiating with that target zone.
        </Text>
        <Divider styleName="empty" />

          **ToDo _images/target_zones.svg**

        <Text>
          Fig. 4.2 Legal Target Zones
        </Text>
        <Divider styleName="empty" />
        <Subtitle>
          4.1.2. Impact with an Illegal Blocking Zone
        </Subtitle>
        <Text styleName="multiline bold">
          Making contact with an illegal blocking zone should be penalized based on the impact it has on the target. (see Section 2.4.2)
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          Using an illegal blocking zone also has sufficient impact to warrant a penalty if the contact puts an opponent significantly off balance, or significantly alters their trajectory or speed (for example, significantly holding them back).
        </Text>
        <Divider styleName="empty" />
        <Text>
          Illegal blocking zones include:
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline bold">
          - Head, down to the collarbone{'\n'}
          - Forearm, from the point of the elbow to the fingertips{'\n'}
          - Legs, from below mid-thigh to the wheels of the skate
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          For safety reasons, any forceful contact initiated with the head or neck, intentional use of the head or neck to positionally block, or intentional and forceful jabbing with elbows or strikes with knees should be penalized regardless of impact.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          Forearms are considered a legal blocking zone when they are held close against the initiator’s torso.
        </Text>
        <Divider styleName="empty" />

          **ToDo _images/blocking_zones.svg**

        <Text styleName="multiline">
          Fig. 4.4 Legal Blocking Zones
        </Text>
        <Divider styleName="empty" />
        <Subtitle>
          4.1.3. Other Illegal Contact
        </Subtitle>
        <Text styleName="multiline bold">
          Initiating a block is legal when a Skater is moving counterclockwise, in play, upright, and in bounds during a Jam using legal contact zones.** Other contact may be dangerous because it is unexpected.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          Accordingly, Skaters cannot initiate a block while down, out of bounds, out of play, airborne, stopped, or skating clockwise. Skaters also cannot initiate a block on opponents who are down, fully out of bounds, or out of play. Skaters may initiate a block on an opponent who is straddling the track boundary, stopped, or skating clockwise.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          Initiation of assists should be held to the same metrics as that of blocking.
        </Text>
        <Divider styleName="empty" />
        <Subtitle>
          4.1.4. Multiplayer Blocks
        </Subtitle>
        <Text styleName="multiline bold">
          Skaters may not form a wall by linking with or grasping a teammate, or otherwise forming an impenetrable connection.** This action warrants a penalty if an opponent attempts to get between them and fails to do so due to the illegal formation.
        </Text>
        <Divider styleName="empty" />
        <Title>
          4.2. Game Structure Penalties
        </Title>
        <Text styleName="multiline">
          When the basic rules of the game are violated in a manner that would give a team an advantage, the individual or team who violates the rule should be penalized.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          A team gains advantage if an illegal act results in:
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          - an opponent becoming (or remaining) unable to block{'\n'}
          - a gain of position or a teammate’s gain of position{'\n'}
          - the game flow being altered
        </Text>
        <Divider styleName="empty" />
        <Subtitle>
          4.2.1. Illegal Positioning
        </Subtitle>
        <Text styleName="multiline bold">
          Since all Blockers are unable to block when a Pack cannot be defined,
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          if a Skater’s illegal action destroys the Pack, or if a Skater’s actions prevent or delay the reformation of a Pack, that Skater should be penalized.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="bold">
          It is illegal to adopt or maintain a position in which one cannot be blocked.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          Skaters may not intentionally leave the track, nor may Blockers intentionally leave the Engagement Zone. While there are many legal actions that would cause a Skater to be put into an illegal position (for example, out of bounds or out of play), intentionally adopting such a position should be penalized. It is legal for Jammers and Pivots to leave the track to retrieve an out-of-bounds helmet cover. A Skater who is illegally positioned must immediately act to regain a legal position.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          If a Skater has reason to believe that they are legally positioned (even though they are not), or has reason to believe that they cannot legally return to a legal position, they must be warned before being assessed a penalty for failing to return to a legal position.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          If a Skater is not legally positioned at the start of a Jam, the Skater should immediately yield position to everybody in the vicinity. Failing to do so after a warning is considered to be intentionally maintaining an illegal position and should be penalized accordingly.
        </Text>
        <Divider styleName="empty" />
        <Subtitle>
          4.2.2. Gaining Position
        </Subtitle>
        <Text styleName="multiline bold">
          It is illegal for a Skater to use the out-of-bounds area to gain position on someone who is upright and in bounds.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          This action is referred to as “cutting the track.” Skaters who are out of bounds must return in bounds behind any upright and in bounds Skater who they were behind when they left the track. The position of downed Skaters is not assessed until they are upright. If there is a Pack, Skaters who are out of bounds may return in bounds in front of any out of play Skaters. If there is no Pack, Skaters who are out of bounds may return in bounds in front of any Skaters more than 20 ft (6.10 m) from the last defined Pack.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          Skaters who intentionally, but legally, leave the track (examples include to report to the Penalty Box or to fix equipment) must return to the track behind all in-play Blockers. If there is no Pack, they must return to the track behind all Blockers within 20 ft (6.10 m) of the last defined Pack.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline bold">
          If a Skater is put out of bounds due to an opponent’s block, the Skater must return in bounds behind that opponent, even if the Skater was in front of the opponent before being blocked.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          That opponent gives up this advantage if they go down, out of bounds, or out of play (or more than 20 ft (6.10 m) from the last defined Pack if there is no Pack) prior to the Skater re-entering the track. Skaters other than the initiator of the block are able to re-establish their superior position if they are upright, in bounds, and in play before the Skater returns to the track. Skaters who illegally re-enter the track may immediately cede by returning fully out of bounds. Cutting one single teammate does not have enough impact to warrant a penalty.
        </Text>
        <Divider styleName="empty" />
        <Subtitle>
          4.2.3. Interfering with the Flow of the Game
        </Subtitle>
        <Divider styleName="empty" />
        <Text styleName="multiline bold">
          All efforts should be made by teams and Officials to ensure that the period clock runs according to the rules of the game, and that Jams start and end as specified in the rules.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          Any inappropriate action that interferes with the game - including causing the period clock to stop, preventing a Jam from starting, or ending a Jam prematurely should be penalized. Examples of inappropriate actions include, but are not limited to:
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          - Skaters queued for the Penalty Box not on the track at the Jam start{'\n'}
          - No Blockers from one team on the track at the Jam start{'\n'}
          - All Blockers from one team entirely out of position at the Jam start{'\n'}
          - Either team not fielding a Jammer for the Jam{'\n'}
          - A team fielding too many Skaters during a Jam which results in an advantage that cannot be removed by the removal of the extra Skater(s){'\n'}
          - A team successfully requesting a Team Timeout when they have none remaining{'\n'}
          - A team member who is neither the Captain nor the Designated Alternate successfully requesting a Team Timeout or Official Review
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          Officials and Skaters should work together to ensure that the game flows according to the rules.
        </Text>
        <Divider styleName="empty" />
        <Subtitle>
          4.2.4. Other Illegal Procedures
        </Subtitle>
        <Text styleName="multiline bold">
          Skaters who violate the rules of the game should be penalized if the violation has a significant impact on the game.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          Examples of this are listed in the Rules of Flat Track Roller Derby Casebook; however, Skaters and Officials should work to ensure that the rules are followed as swiftly as possible, and to rectify any illegal or potentially illegal play before it has sufficient impact on the game to warrant penalization. Nevertheless, if a technical violation by one team results in an advantage, this should be penalized.
        </Text>
        <Divider styleName="empty" />
        <Title>
          4.3. Penalties for Unsporting Conduct (Misconduct)
        </Title>
        <Text styleName="multiline bold">
          All participants in a game of roller derby must be respectful of one another.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          This includes but is not limited to Skaters, Team Staff, Officials, mascots, event staff, and spectators. When Skaters or Team Staff behave in an unsporting manner, their misconduct should be penalized accordingly.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          Misconduct can take many forms and does not have to be intentional to be considered unsporting. Examples include, but are not limited to:
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          - Deceiving or ignoring Officials{'\n'}
          - Engaging in dangerous and illegal actions that pose a substantial hazard to oneself or another{'\n'}
          - Disrespectful contact to an Official or forcible contact which is negligent or avoidable{'\n'}
          - Being abusive toward another person{'\n'}
          - Failure to abide by Governing Body policies during the game pertaining to players, team support staff, and the immediate play area
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          Actions which seriously undermine the legitimacy of the sport or display a lack of respect for the sport, its execution, and those who contribute to it may also be penalized.
        </Text>
        <Divider styleName="empty" />
        <Title>
          4.4. Enforcing Penalties
        </Title>
        <Text styleName="multiline bold">
          Upon completion of the correct verbal cue and hand signal from an Official, the penalized Skater must immediately leave the track.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          Upon sitting in any seat in the Penalty Box, the Skater’s penalty time begins. Skaters serve 30 seconds of Jam time for each penalty assessed to them. The final 10 seconds of their penalty time must be served while standing.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          - If a Skater stands early, their time stops until they are seated again.{'\n'}
          - If a Skater does not stand in a manner that makes it clear to Officials, Skaters, and spectators that they are serving their final 10 seconds, their timing stops until they stand.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          If a Skater sits in the Penalty Box between Jams, their time does not start until the beginning of the following Jam.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          If a Skater is assessed a penalty but unable to serve it–for example, due to an injury or an equipment malfunction–a substitute may serve in their place once the Jam ends. In this case, the Skater who was unable to serve their own penalty may not skate for the following three Jams.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          Skaters may remove their mouthguard, but no other protective gear, while seated in the Penalty Box. Skaters must replace their mouthguard prior to leaving the Penalty Box.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline bold">
          Nobody may enter the Penalty Box except for Officials and Skaters who are serving penalties.
        </Text>
        <Divider styleName="empty" />
        <Subtitle>
          4.4.1. Penalty Enforcement for Blockers
        </Subtitle>
        <Text styleName="multiline bold">
          No more than two Blockers for the same team may sit in the Penalty Box at the same time.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          If a third Blocker reports to the Penalty Box while two Blockers for their team are seated, the third Blocker will be placed in queue. If a Blocker is standing in the Penalty Box, another Blocker may sit in the open seat.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline bold">
          A Blocker in queue may return to the Penalty Box when there is space in the Penalty Box, unless doing so would destroy the Pack.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          A Blocker must immediately return if instructed to do so by an Official. Once a Blocker in queue returns to the track, they should be treated like any other unpenalized Blocker.
        </Text>
        <Divider styleName="empty" />
        <Subtitle>
          4.4.2. Penalty Enforcement for Jammers
        </Subtitle>
        <Text styleName="multiline bold">
          A Jammer may have their penalty time shortened if the other Jammer also receives a penalty.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          In this case, the two Jammers serve as little time as possible so long as:
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          - the two Jammers serve an equivalent amount of penalty time, per penalty{'\n'}
          - whenever possible given point 1, there is at least one Jammer who is not serving a penalty
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          Jammers who are to be released due to the other Jammer sitting should be released immediately once the other Jammer sits. If one Jammer sits between Jams, the other Jammer should be released at the start of the next Jam. If both Jammers sit simultaneously, they will both be released immediately. If both Jammers sit between Jams, they should be released at the start of the next Jam.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          If a Jammer is sent to the Box when there is no opposing Jammer (for example, because the opposing Jammer has an equipment malfunction), the Jam will end once the Jammer is seated. This ensures that there is one Jammer who is not serving a penalty.
        </Text>
        <Divider styleName="empty" />
        <Title>
          4.5. Fouling Out & Expulsions
        </Title>
        <Text styleName="multiline bold">
          When seven penalties are recorded for a Skater, that Skater fouls out of the game.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          This includes penalties assessed to a Skater on behalf of someone else (examples include penalties assessed to a Captain or a Blocker on behalf of their team).
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline bold">
          Expulsions are a way to penalize a Skater or Team Staff who has committed an act that is sufficiently dangerous or unsporting as to remove the individual from the game for that action alone.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          Negligent, intentional, or reckless actions should be considered for expulsion independently of their impact. A substitute must serve the penalty for an expelled Skater. If a Non-Skater is expelled, the team’s Captain will serve the penalty when possible (as a Blocker), but no penalty will be recorded for the Captain.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          In the event that a Skater is to be removed from play (either due to fouling out or expulsion), that Skater’s penalty time should begin as soon as possible.
        </Text>
        <Divider styleName="empty" />
        <Text styleName="multiline">
          If a Skater is removed from the game mid-Jam, their penalty will be timed as if a Skater were seated even though there is no Skater formally in the Box. If the Jam ends before the time is complete, the Skater’s team must be given the opportunity to substitute a different Skater to serve the remainder of the penalty in the same position as the removed Skater. Substitutions may not occur during the Jam in which the Skater is removed.
        </Text>
      </View>
    );
  }
}
