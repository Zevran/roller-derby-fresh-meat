import React from 'react';
import { Icon } from '@shoutem/ui';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import RulesScreen from '../screens/RulesScreen';
import MinimumSkillsScreen from '../screens/MinimumSkillsScreen';
import GlossaryScreen from '../screens/GlossaryScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Rules: {
      screen: RulesScreen,
    },
    MinimumSkills: {
      screen: MinimumSkillsScreen,
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
            iconName = 'home';
            break;
          case 'Rules':
            iconName = 'stamp';
            break;
            case 'MinimumSkills':
            iconName = 'trophy';
            break;
          case 'Glossary':
            iconName = 'books';
          break;
        }
        return (
          <Icon name={iconName} color={focused ? Colors.tabIconSelected : Colors.tabIconDefault} />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
