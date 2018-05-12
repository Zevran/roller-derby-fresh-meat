import React from 'react';
import {
  View,
  Text,
  Row,
  Image,
  Caption,
  Divider,
  Icon
} from '@shoutem/ui';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View>
        <Row styleName="small">
          <Image
            styleName="small-avatar"
            source={
              __DEV__
                ? require('../assets/images/robot-dev.png')
                : require('../assets/images/robot-prod.png')
            }
          />
          <Text>This application is still in development.</Text>
        </Row>

        <Caption styleName="md-gutter">
          This application is developed by Gaël Reyrol, fresh meat of Caen Men's Roller Derby.
        </Caption>

        <Divider styleName="section-header">
          <Caption>TODO LIST</Caption>
        </Divider>

        <Row>
          <Icon name="checkbox-on" />
          <Text>WFTDA rules view with main sections</Text>
        </Row>
        <Row>
          <Icon name="checkbox-on" />
          <Text>Glossary view according to rules</Text>
        </Row>
        <Row>
          <Icon name="checkbox-off" />
          <Text>Use-cases view according to rules</Text>
        </Row>
        <Row>
          <Icon name="checkbox-off" />
          <Text>Minimum skills view with related videos</Text>
        </Row>

      </View>
    );
  }
}
