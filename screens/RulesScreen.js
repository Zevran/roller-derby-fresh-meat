import React from 'react';
import { FileSystem, Asset } from 'expo';
import { ScrollView , StyleSheet, Image } from 'react-native';
import { View, Text, Row, Divider, Icon, ImagePreview } from '@shoutem/ui'
import Markdown from 'react-native-simple-markdown';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

const markdownFiles = {
  'Summary': require('../assets/markdown/0-summary.md'),
  'GameParametersAndSafety': require('../assets/markdown/1-game-parameters-and-safety.md'),
  'GamePlay': require('../assets/markdown/2-gameplay.md'),
  'Scoring': require('../assets/markdown/3-scoring.md'),
  'Penalties': require('../assets/markdown/4-penalties.md'),
  'Officiating': require('../assets/markdown/5-officiating.md'),
};

const BlockingZonesImage = require('../assets/images/rules/blocking_zones.png');
const ContactZonesImage = require('../assets/images/rules/contact_zones.png');
const TrackDimensionsImage = require('../assets/images/rules/track_dimensions.png');


const getMarkdown = async (filename, req) => {
  const asset = await Asset.fromModule(req);
  const filesystem = await FileSystem.downloadAsync(
    asset.uri,
    FileSystem.documentDirectory + filename,
  );
  const content = await FileSystem.readAsStringAsync(filesystem.uri);

  return content;
}

export default class RulesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: 'Rules',
  };

  async componentWillMount() {
    // const assetFromModule = await Asset.fromModule(require('../assets/markdown/0-summary.md'));
    // const filesystemDownload = await FileSystem.downloadAsync(
    //   assetFromModule.uri,
    //   FileSystem.documentDirectory + '0-summary.md',
    // );
    // const filesystemReadAsString = await FileSystem.readAsStringAsync(filesystemDownload.uri);

    const summary = await getMarkdown('summary', markdownFiles.Summary)
    const gameParametersAndSafety = await getMarkdown('gameParametersAndSafety', markdownFiles.GameParametersAndSafety)
    const gamePlay = await getMarkdown('gamePlay', markdownFiles.GamePlay)
    const scoring = await getMarkdown('scoring', markdownFiles.Scoring)
    const penalties = await getMarkdown('penalties', markdownFiles.Penalties)
    const officiating = await getMarkdown('officiating', markdownFiles.Officiating)

    this.setState({
      summary,
      gameParametersAndSafety,
      gamePlay,
      scoring,
      penalties,
      officiating
    });
  }

  _renderHeader(section) {
    return (
      <View>
        <Row styleName="small">
          <Icon name="down-arrow" />
          <Text>{section.title}</Text>
        </Row>
        <Divider styleName="line" />
      </View>
    );
  }

  _renderContent(section) {
    return (
      <ScrollView style={styles.content}>
        <Markdown
          styles={markdownStyles}
          rules={{
            image: {
              react: (node, output, state) => {
                let imageSource = null;
                let imageWidth = 0;
                let imageHeight = 0;
                switch (node.target) {
                  case 'TrackDimensions':
                    imageWidth = 816;
                    imageHeight = 576;
                    imageSource = TrackDimensionsImage;
                    break;
                  case 'ContactZones':
                    imageWidth = 371;
                    imageHeight = 342;
                    imageSource = ContactZonesImage;
                    break;
                  case 'BlockingZones':
                    imageWidth = 371;
                    imageHeight = 342;
                    imageSource = BlockingZonesImage;
                    break;
                  default:
                    break;
                }

                return (
                  <ImagePreview
                    key={node.target}
                    source={imageSource}
                    width={imageWidth}
                    height={imageHeight}
                  />
                );
              },
            },
          }}
      >
        {section.content}
      </Markdown>
    </ScrollView>
    // <View style={styles.content}>
    //   <Text>{section.content}</Text>
    // </View>
    );
  }

  render() {
    const sections = [
      {
        title: 'Summary',
        content: this.state.summary
      },
      {
        title: 'Game parameters & safety',
        content: this.state.gameParametersAndSafety
      },
      {
        title: 'Gameplay',
        content: this.state.gamePlay
      },
      {
        title: 'Scoring',
        content: this.state.scoring
      },
      {
        title: 'Penalties',
        content: this.state.penalties
      },
      {
        title: 'Officiating',
        content: this.state.officiating
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

const markdownStyles = {
  heading1: {
    fontSize: 24,
    color: 'black',
    marginBottom: 10,
  },
  heading2: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
  },
  heading3: {
    fontSize: 16,
    color: 'black',
    marginTop: 5,
    marginBottom: 5,
  },
  link: {
    color: 'pink',
  },
  mailTo: {
    color: 'orange',
  },
  text: {
    color: '#555555',
    marginBottom: 5,
  },
  list: {
    marginTop: 10,
    marginBottom: 10,
  },
  listItemNumber: {
    alignSelf: 'flex-start',
  },
  listItemText: {
    alignSelf: 'flex-start',
    paddingTop: 5,
    marginTop: 3,
  }
}
