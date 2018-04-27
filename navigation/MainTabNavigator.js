import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import RulesScreen from '../screens/RulesScreen';
import GlossaryScreen from '../screens/GlossaryScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Rules: {
      screen: RulesScreen,
    },
    Glossary: {
      screen: GlossaryScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-home${focused ? '' : '-outline'}`
                : 'md-home';
            break;
          case 'Rules':
            iconName =
              Platform.OS === 'ios'
                ? `ios-document${focused ? '' : '-outline'}`
                : 'md-document';
            break;
          case 'Glossary':
          iconName =
            Platform.OS === 'ios'
              ? `ios-book${focused ? '' : '-outline'}`
              : 'md-book';
          break;
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3, width: 25 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
