import React from 'react';
import { ScrollView } from 'react-native';
import { View, Tile, Title, Subtitle, Text, Row, Divider, Icon, Image } from '@shoutem/ui'
import { Dimensions } from 'react-native';

const GameplayFrontSkatesForward = require('../assets/images/usecases/c-gameplay-front-skates-forward.png');
const GameplayPackBlockedOut = require('../assets/images/usecases/c-gameplay-pack-blocked-out.png');
const GameplayPackStretch = require('../assets/images/usecases/c-gameplay-pack-stretch.png');
const GameplayPositions = require('../assets/images/usecases/c-gameplay-positions.png');

export default class UseCasesScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: 'Use cases: ' + params.title,
    }
  };

  renderImage(path) {
    if (path) {
      let imageWidth = null;
      let imageHeight = 0;
      let image = null;

      switch (path) {
        case 'c-gameplay-front-skates-forward.png':
          image = GameplayFrontSkatesForward
          imageWidth = 302;
          imageHeight = 188;
          break;
        case 'c-gameplay-pack-blocked-out.png':
          image = GameplayPackBlockedOut
          imageWidth = 302;
          imageHeight = 292;
          break;
        case 'c-gameplay-pack-stretch.png':
          image = GameplayPackStretch
          imageWidth = 302;
          imageHeight = 203;
          break;
        case 'c-gameplay-positions.png':
          image = GameplayPositions
          imageWidth = 300;
          imageHeight = 132;
          break;
        default:
          break;
      }

      return (
        <Image
          style={{
            height: imageHeight,
            width: imageWidth,
            ...styles.image
          }}
          source={image}
        />
      );
    }
  }

  renderOutcome(content) {
    if (content) {
      return (
        <View>
          <Divider styleName="empty" />
          <Subtitle>Outcome</Subtitle>
          <Text styleName="multiline">
            {content}
          </Text>
        </View>
      );
    }
  }

  renderRationale(content) {
    if (content) {
      return (
        <View>
          <Divider styleName="empty" />
          <Subtitle>Rationale</Subtitle>
          <Text styleName="multiline">
            {content}
          </Text>
        </View>
      );
    }
  }

  renderKeepInMinds(content) {
    if (content && content.length > 0) {
      const elems = content.map((keepinmind, index) => {
        return (
          <View key={index}>
            <Text styleName="multiline">
              {keepinmind}
            </Text>
            { (index < content.length)
              ? <Divider styleName="empty" />
              : null
            }
          </View>
        )
      });

      return (
        <View>
          <Divider styleName="empty" />
          <Subtitle>Keep in mind</Subtitle>
          {elems}
        </View>
      )
    }
  }

  renderFollowUps(content) {
    if (content && content.length > 0) {
      const elems = content.map((followup, index) => {
        return (
          <View key={index}>
            <Text styleName="multiline">
              {followup}
            </Text>
            { (index < content.length)
              ? <Divider styleName="empty" />
              : null
            }
          </View>
        )
      });

      return (
        <View>
          <Divider styleName="empty" />
          <Subtitle>Follow-Up</Subtitle>
          {elems}
        </View>
      )
    }
  }

  renderUseCase(usecase, index) {
    return (
      <View key={index} styleName="space-between">
        <Tile styleName="md-gutter">
          <Title>{usecase.title}</Title>
          { this.renderImage(usecase.image) }
          <Text styleName="multiline">{usecase.description}</Text>
          { this.renderOutcome(usecase.outcome) }
          { this.renderRationale(usecase.rationale) }
          { this.renderKeepInMinds(usecase.keepinminds) }
          { this.renderFollowUps(usecase.followups) }
        </Tile>
      </View>
    );
  }

  renderUseCases(cases) {
    return cases.map((usecase, index) => {
      return this.renderUseCase(usecase, index);
    });
  }

  render() {
    const { navigation } = this.props;
    const useCases = navigation.getParam('content');

    return (
      <ScrollView>
        {this.renderUseCases(useCases)}
      </ScrollView>
    );
  }
}

const styles = {
  image: {
    marginTop: 20,
    marginBottom: 30
  }
}
