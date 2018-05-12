import React from 'react';
import {
  View,
  Title,
  Row,
  Image,
  Caption,
  Divider,
  Icon
} from '@shoutem/ui';
import { ScrollView } from 'react-native';

import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

import BasicSkating from '../components/MinimumSkills/BasicSkating';
import RecoveryTactics from '../components/MinimumSkills/RecoveryTactics';
import BalanceAndAgility from '../components/MinimumSkills/BalanceAndAgility';
import PackSkillsAndInteractions from '../components/MinimumSkills/PackSkillsAndInteractions';
import Blocking from '../components/MinimumSkills/Blocking';

export default class MinimumSkillsScreen extends React.Component {
  static navigationOptions = {
    title: 'Minimum Skills',
  };

  _renderHeader(section) {
    return (
      <View>
        <Row styleName="small">
          <Icon name="down-arrow" />
          <Title>{section.title}</Title>
        </Row>
        <Divider styleName="line" />
      </View>
    );
  }

  _renderContent(section) {
    return (
      <ScrollView>{section.content}</ScrollView>
    );
  }

  render() {

    const sections = [
      {
        title: 'Basic Skating',
        content: <BasicSkating />
      },
      {
        title: 'Recovery Tactics',
        content: <RecoveryTactics />
      },
      {
        title: 'Balance & Agility',
        content: <BalanceAndAgility />
      },
      {
        title: 'Pack Skills & Interactions',
        content: <PackSkillsAndInteractions />
      },
      {
        title: 'Blocking',
        content: <Blocking />
      }
    ];

    return (
      <View>
        <ScrollView>
          <Accordion
            sections={sections}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          />
        </ScrollView>
      </View>
    );
  }
}
