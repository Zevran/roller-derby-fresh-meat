import React from 'react';
import { ScrollView , StyleSheet } from 'react-native';
import { View, Title, Text, Row, Divider, Icon, ImagePreview } from '@shoutem/ui'
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

import Summary from '../components/Rules/Summary';
import GameParametersAndSafety from '../components/Rules/GameParametersAndSafety';
import Gameplay from '../components/Rules/Gameplay';
import Scoring from '../components/Rules/Scoring';
import Penalties from '../components/Rules/Penalties';
import Officiating from '../components/Rules/Officiating';

export default class RulesScreen extends React.Component {
  static navigationOptions = {
    title: 'Rules',
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
      <ScrollView style={styles.content}>
        {section.content}
      </ScrollView>
    );
  }

  render() {

    const sections = [
      {
        title: 'Summary',
        content: <Summary />
      },
      {
        title: 'Game parameters & safety',
        content: <GameParametersAndSafety />
      },
      {
        title: 'Gameplay',
        content: <Gameplay />
      },
      {
        title: 'Scoring',
        content: <Scoring />
      },
      {
        title: 'Penalties',
        content: <Penalties />
      },
      {
        title: 'Officiating',
        content: <Officiating />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 25,
    // paddingLeft: 20,
    // paddingRight: 20,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: 'black'
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
});
