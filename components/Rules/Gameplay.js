import React from 'react';
import { View, ImagePreview, Title, Subtitle, Text, Divider } from '@shoutem/ui'

const BlockingZonesImage = require('../../assets/images/rules/blocking_zones.png');
const ContactZonesImage = require('../../assets/images/rules/contact_zones.png');
const TrackDimensionsImage = require('../../assets/images/rules/track_dimensions.png');

export default class Gameplay extends React.Component {

  render() {
    return (
      <View>
          <Title>
            2.1. The Track
          </Title>
          <Text styleName="multiline bold">
            The track must conform to the standardized dimensions of the WFTDA Track Specifications.
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            The track must be flat, clean, and suitable for roller skating. The track must be marked by a boundary that stands in high contrast to the floor. The boundary counts as part of the track (the boundary is “in bounds”), which may not vary in width around the track.
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            The track boundary, the Pivot Line, and the Jammer Line may be of any pattern or color so long as they clearly mark the edge of the track.
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            Near the track, an area must be marked out for each team (the Team Bench Area) and for the Penalty Box. The boundary in these cases must also be high contrast and counts as part of the relevant area. For example, the boundary for the Penalty Box counts as part of the Penalty Box. Only Skaters who are actively serving a penalty may enter the Penalty Box area.
          </Text>
          <Divider styleName="empty" />

          <ImagePreview source={TrackDimensionsImage} width={816} height={576} />

          <Text styleName="multiline">
            Fig. 2.2 The Track. (Track Layout and Design © 2002 Electra Blu/Amy Sherman, Texas Rollergirls, used here with permission.)
          </Text>
          <Divider styleName="empty" />
          <Title>
            2.2. Positions
          </Title>
          <Text styleName="multiline bold">
            For each Jam, a team must field one Jammer, and at most four Blockers.
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            One of these Blockers may be designated as the Pivot Blocker. Skaters serving penalties are counted toward these limits. Teams must field at least one Blocker who is not serving a penalty. Skaters may not change positions during a Jam, except in the case of a Star Pass (see below).
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            When a Jam begins, the Jammers must be touching on or behind the Jammer Line. Blockers must all be behind the Pivot Line, ahead of the Jammer Line, and all Non-Pivot Blockers must not be touching the Pivot Line. If either Pivot lines up touching the Pivot Line at the Jam’s start, all Non-Pivot Blockers must be behind that Pivot’s hips.
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            Any Skaters who are not completely on the track or serving a penalty (in or on their way to the Penalty Box) at the Jam-Starting Whistle may not participate in the Jam (and thus do not count toward these limits). Any Skaters who are partially illegally positioned (but are still on the track; for example, a Jammer who is touching past the Jammer Line) are required to yield their position to all other Skaters in the immediate vicinity, and are not considered to have joined the Jam until they have done so. Any Skaters who are wholly illegally positioned are immediately penalized.
          </Text>
          <Divider styleName="empty" />
          <Subtitle>
            2.2.1. Jammers
          </Subtitle>
          <Text styleName="multiline bold">
            The Jammer is denoted as the Skater in visible possession of the Jammer helmet cover (a.k.a. “The Star”) at the beginning of the Jam.
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            If a Skater is serving a penalty as their team’s Jammer, no teammate may begin the Jam in possession of the Star or behind the Jammer Line. If there is neither a Skater serving a penalty as the Jammer nor a Skater with a visible Star, then the team has failed to field a Jammer for the upcoming Jam and will be penalized accordingly. Unless they are serving a penalty, the Jammer must start the Jam on or behind the Jammer Line. Jammers may be stopped or coasting, but may not be actively gaining speed in the counterclockwise direction at the Jam-Starting Whistle.
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            The Star may only be carried by the Jammer wearing it on their helmet, or by that team’s Jammer or Pivot holding it in their grasp. Other Skaters may not control the Star, and the Jammer and Pivot may not hide the Star (examples include putting it in a pocket or hiding it in a uniform).
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline bold">
            The Jammer is the only Skater who can score points for their team (see Section 3).
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            Jammers may also legally exit and remain outside of the Engagement Zone.
          </Text>
          <Divider styleName="empty" />
          <Subtitle>
            2.2.2. Lead Jammer
          </Subtitle>
          <Text styleName="multiline bold">
            The Lead Jammer is the first Jammer who earns a pass on the foremost in play Blocker, having already earned a pass on all other in play Blockers. (see Section 2.5)
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            When one Jammer is determined to be the Lead Jammer, this is indicated by two short whistle blasts. A Jammer becomes ineligible to earn Lead during a Jam if they commit a penalty during that Jam, exit the front of the Engagement Zone without having earned Lead, remove their helmet cover, or have their helmet cover removed by a teammate. If both Jammers qualify for Lead at the same moment (for example, the foremost Blocker goes out of play), the foremost Jammer at that moment will be declared Lead. Only Skaters who begin the Jam as Jammers may become Lead (so a Pivot who receives the Star cannot become Lead).
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            The Lead Jammer will lose their Lead Jammer status if they commit a penalty, intentionally remove the Star (once it is on), or have the Star intentionally removed from their head by a teammate.
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline bold">
            The Lead Jammer is the only Skater who may call off a Jam before the full two minutes elapse.
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            The Lead Jammer calls off the Jam by repeatedly placing their hands on their hips.
          </Text>
          <Divider styleName="empty" />
          <Subtitle>
            2.2.3. Pivot Blocker
          </Subtitle>
          <Text styleName="multiline bold">
            The Pivot is a Blocker, and is denoted as the Skater in possession of the Pivot helmet cover (a.k.a. “The Stripe”) at the Jam-Starting Whistle.
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            The Pivot wearing the Stripe with the stripe showing has several additional abilities that other Blockers do not.
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            - The Pivot may become their team’s Jammer (see Section 2.2.4).{'\n'}
            - The Pivot may control the Star (pick it up, move it, etc.) even if they are not the Jammer; for example, to recover it and return it to the Jammer.{'\n'}
            - The Pivot may begin a Jam while touching the Pivot Line.
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            When not wearing the Stripe with the stripe showing, the Pivot is treated as any other Blocker.
          </Text>
          <Divider styleName="empty" />
          <Subtitle>
            2.2.4. Passing the Star
          </Subtitle>
          <Text styleName="multiline bold">
            A team’s Jammer may transfer their position by handing the Star to their team’s Pivot while both Skaters are upright, in bounds, and in play, and while neither the Jammer nor the Pivot is en route to, or in queue for, the Penalty Box.
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            Upon releasing the Star into the Pivot’s grasp, the position of Jammer is passed. The new Jammer takes over for the old Jammer in terms of points scored, trips through the pack, and Skaters passed.
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            If the Star is passed illegally, the initial Jammer remains the Jammer and the initiator of the Pass should be penalized. This includes:
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            - releasing the Star into the grasp of a Skater other than their Pivot{'\n'}
            - releasing the Star into the Pivot’s grasp while one of the two parties is down, out of bounds, out of play, or en route to the Penalty Box{'\n'}
            - releasing the Star into the Pivot’s grasp while the Pivot is in queue for the Penalty Box (even if the Pivot is not yet en route){'\n'}
            - releasing the Star into the grasp of a Pivot who is not wearing the Stripe
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            If the Pivot comes into control of the Star through any other means (for example, by picking up a fallen Star), a Star Pass has not taken place. Accordingly, the Pivot does not attain the position of Jammer and thus may not put the Star on their own helmet. They may hold the Star in their hand, drop it, or return it to the Jammer.
          </Text>
          <Divider styleName="empty" />
          <Title>
            2.2.5. Blockers
          </Title>
          <Text styleName="bold">
            All other Skaters are considered Blockers.
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            Non-Pivot Blockers may not wear helmet covers or have any markings on their helmets that could be confused for the Stripe or the Star.
          </Text>
          <Divider styleName="empty" />
          <Title>
            2.3. Engagement Zone & Pack
          </Title>
          <Text styleName="multiline bold">
            The Pack is the largest group of in bounds and upright Blockers in proximity and containing members from both teams.
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            If no single group of Blockers meets this definition, there is no Pack, even if there are multiple groups of the same size. Proximity is defined as not more than 10 ft (3.05m), as measured from the hips, in front of or behind the nearest Pack Skater.
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            It is the responsibility of all Blockers to maintain a Pack, and intentionally destroying the Pack is illegal. When the Pack is moving in the derby direction or stopped during a Jam, clockwise skating which destroys the Pack is illegal. All Blockers from both teams must act to reform a Pack. Blocks on or by Blockers which have impact while there is no Pack should be immediately penalized.
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline bold">
            The Engagement Zone is the area in which it is legal for Blockers to engage or be engaged.
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            The Engagement Zone extends forward and backward 20 ft (6.10m) from the foremost and rearmost Pack Skaters, respectively. Any Blocker outside of the Engagement Zone is out of play and cannot engage or be engaged. If there is no Pack, the Engagement Zone is said to stretch from the foremost Blocker to the rearmost Blocker (relative to the prior Pack); however, it is still illegal for any Blockers to engage or to be engaged. Skaters who are illegally blocked while out of play may legally counter-block.
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            Distances for determining the Pack and the Engagement Zone are measured as the shortest distance, parallel to the inside track boundary, between Skaters’ hips.
          </Text>
          <Divider styleName="empty" />
          <Title>
            2.4. Blocks and Assists
          </Title>
          <Text styleName="multiline bold">
            “Blocking” refers to any physical contact made to an opponent, and to any movement or placement of one’s body to impede said opponent’s speed or movement, during a Jam, whether or not contact is made.
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            Counter-blocking is any movement towards an oncoming block by the receiving Skater. Counter-blocking is blocking. Actions that meet the above description are considered blocking, even if accidental. Contact made to teammates is not considered blocking even if it is a disadvantage to the initiator or teammate.
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            All contact between opponents has an initiator, though it is possible for two or more Skaters to mutually initiate blocks against one another.
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            Skaters may not block or assist while out of bounds, out of play, down, stopped, or moving clockwise. Skaters also may not initiate a block (or assist) on an opponent (teammate) who is down, out of play, or fully out of bounds. Skaters may, however, initiate a block (or assist) on someone who is straddling, stopped, or moving in any direction (even clockwise).
          </Text>
          <Divider styleName="empty" />
          <Title>
            2.4.1. Target Zones
          </Title>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            It is only legal to initiate a block to an opponent’s chest, front and sides of the torso, arms, hands, hips, and the front of the legs above mid-thigh.
          </Text>
          <Divider styleName="empty" />

          <ImagePreview source={ContactZonesImage} width={371} height={342} />

          <Text>
            Fig. 2.4 Legal Target Zones
          </Text>
          <Divider styleName="empty" />
          <Subtitle>
            2.4.2. Blocking Zones
          </Subtitle>
          <Text styleName="multiline">
            It is only legal to initiate a block using one’s torso, arms above the elbow, and legs above mid-thigh.
          </Text>
          <Divider styleName="empty" />

          <ImagePreview source={BlockingZonesImage} width={371} height={342} />

          <Text>
            Fig. 2.6 Legal Blocking Zones
          </Text>
          <Divider styleName="empty" />
          <Title>
            2.5. Passing
          </Title>
          <Text styleName="multiline bold">
            Skaters gain superior position on other Skaters by passing them in the counterclockwise direction.
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            Passing another Skater refers to moving such that one Skater’s center of mass (as demarcated by their hips) moves from behind another Skater’s center of mass to ahead of it.
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline bold">
            Jammers only “earn” a pass if the pass occurs while the Jammer is wearing the Star on their helmet with the stars showing.
          </Text>
          <Text styleName="multiline">
            All earned passes count as passes. Passes are only “earned” if:
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            - the Jammer is upright and in-bounds during the pass, or{'\n'}
            - another Skater skates behind the in-bounds Jammer, giving up their position
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            As soon as a Jammer earns a pass on an opposing Blocker, they also earn a pass on any opponents who are “not on the track”–meaning that they are not part of active gameplay for some reason–and who cease to be part of active gameplay prior to the completion of the Jammer’s scoring pass. This includes a Skater who:
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            - is sent to or serving time in the Penalty Box{'\n'}
            - leaves the track due to injury{'\n'}
            - leaves the track temporarily to fix equipment or skates{'\n'}
            - was not part of the Jam in the first place (because their team did not field the maximum number of Skaters){'\n'}
            - returns to active gameplay behind the Jammer
          </Text>
          <Divider styleName="empty" />
          <Text styleName="multiline">
            A Skater who passes someone while airborne is considered to be “in bounds” if they are in bounds when they leave the ground and the first contact they make upon landing is in bounds. A Skater who passes someone while airborne is considered to be “upright” if the Skater is upright when they leave the ground, and if the first contact they make upon landing is with their skate to the track.
          </Text>
      </View>
    );
  }
}
