import React from 'react';
import {
  Title,
  Heading,
  Text,
  ListView,
  Divider,
  Caption,
  View,
  Tile,
  TextInput,
  Icon
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
      glossary: GlossaryJSON.glossary,
      searchValue: null
    };
  }

  filterGlossary(input) {

    const filteredGlossary = GlossaryJSON.glossary.filter((el) => {
      const result = el.word.search(input);
      return (result !== -1) ? true : false;
    });

    console.log(filteredGlossary.length);

    this.setState({
      glossary: filteredGlossary,
      searchValue: input
    });
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
        <View style={styles.searchContainer} styleName="horizontal sm-gutter-horizontal v-center">
          <Icon style={styles.searchIcon} name="search" />
          <TextInput
            style={styles.searchInput}
            placeholder={'Type a word'}
            value={this.state.searchValue}
            onChangeText={(text) => this.filterGlossary(text)} />
        </View>
        <Divider styleName="line" />
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

const styles = {
  searchIcon: {
    marginLeft: 10,
    backgroundColor: '#fff'
  },
  searchInput: {
    width: '100%'
  },
  searchContainer: {
    backgroundColor: '#fff',
    // borderRadius: 5,
    // flex: 1,
    // height: 30,
  }
};
