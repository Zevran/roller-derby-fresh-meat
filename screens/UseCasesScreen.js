import React from 'react';
import { ScrollView } from 'react-native';
import { View, Tile, Title, Subtitle, Text, Row, Divider, Icon, ImagePreview } from '@shoutem/ui'

export default class UseCasesScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: 'Use cases: ' + params.title,
    }
  };

  renderUseCase(usecase, index) {
    return (
      <View key={index} styleName="space-between">
        <Tile styleName="md-gutter">
          <Title>{usecase.title}</Title>
          <Text styleName="multiline">{usecase.description}</Text>
          <Subtitle>Outcome</Subtitle>
          <Text styleName="multiline">
            {usecase.outcome}
          </Text>
          <Subtitle>Rationale</Subtitle>
          <Text styleName="multiline">
            {usecase.rationale}
          </Text>
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
