import React from 'react';
import { FileSystem, Asset } from 'expo';
import { ScrollView, StyleSheet, Image } from 'react-native';
import Markdown from 'react-native-simple-markdown';

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

  render() {
    return (
      <ScrollView style={styles.container}>
        <Markdown
          styles={markdownStyles}
          rules={{
            image: {
              react: (node, output, state) => {
                switch (node.target) {
                  case 'TrackDimensions':
                    return <Image key="TrackDimensions" source={TrackDimensionsImage} />
                    break;
                  case 'ContactZones':
                    return <Image key="ContactZones" source={ContactZonesImage} />
                    break;
                    case 'BlockingZones':
                    return <Image key="BlockingZones" source={BlockingZonesImage} />
                    break;
                  default:
                    break;
                }
              },
            },
          }}
        >
        {this.state.summary}
        {this.state.gameParametersAndSafety}
        {this.state.gamePlay}
        {this.state.scoring}
        {this.state.penalties}
        {this.state.officiating}
        </Markdown>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
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
