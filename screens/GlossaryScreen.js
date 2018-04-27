import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ListView,
} from 'react-native';
import { WebBrowser } from 'expo';

const GlossaryList = require('../assets/json/glossary.json');

export default class GlossaryScreen extends React.Component {
  static navigationOptions = {
    title: 'Glossary',
  };

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(GlossaryList.glossary),
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.introduction}>Some words or concepts used in this ruleset hold a specific or technical meaning; those are defined in this section. Any words used in the rules that are not defined herein should be treated as colloquial use. If more than one reasonable interpretation of a colloquial term exists that has measurable impact on the game, it will be determined by consensus of the Officials for that game.</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => {
            return (
              <View style={styles.definition}>
                <Text style={styles.titleDefinition}>{rowData.word}</Text>
                <Text style={styles.ContentDefinition}>{rowData.definition}</Text>
              </View>
            );
          }}
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
  ContentDefinition: {
    marginTop: 5,
    marginBottom: 10,
  }
});
