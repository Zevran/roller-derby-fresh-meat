import React from 'react';
import {
  Title,
  Heading,
  Text,
  ListView,
  Divider,
  Caption,
  View,
  Tile
} from '@shoutem/ui';
import {
  StyleSheet,
} from 'react-native';

const GlossaryJSON = require('../assets/json/glossary.json');

export default class GlossaryScreen extends React.Component {
  static navigationOptions = {
    title: 'Glossary',
  };

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.state = {
      glossary: GlossaryJSON.glossary
    };
  }

  renderRow(entry) {
    return (
      <View styleName="space-between">
        <Tile styleName="md-gutter">
          <Title>{entry.word}</Title>
          <Text styleName="multiline">{entry.definition}</Text>
        </Tile>
        <Divider styleName="line" />
      </View>
    )
  }

  render() {
    const glossary = this.state.glossary;

    return (
      <View>
        {/* <Text styleName="multiline">Some words or concepts used in this ruleset hold a specific or technical meaning; those are defined in this section. Any words used in the rules that are not defined herein should be treated as colloquial use. If more than one reasonable interpretation of a colloquial term exists that has measurable impact on the game, it will be determined by consensus of the Officials for that game.</Text> */}
        {/* <Divider styleName="section-header">
          <Caption>ENTRIES</Caption>
        </Divider> */}
        <ListView
          data={glossary}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  introduction: {
    margin: 10,
  },
  definition: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5
  },
  titleDefinition: {
    fontSize: 16,
  },
  contentDefinition: {
    marginTop: 5,
    marginBottom: 10,
  }
});
