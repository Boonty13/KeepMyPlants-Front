import React from 'react'
import { View, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'

import MyGardenScreen from './components/screens/MyGardenScreen'
import TipsScreen from './components/screens/TipsScreen'
import SettingsScreen from './components/screens/SettingsScreen'
import ShoppingScreen from './components/screens/ShoppingScreen'

import {green, darkGreen, lightGreen} from './components/tools/globalVariables'


var BottomNavigator = createBottomTabNavigator({
  Astuces: TipsScreen,
  'Mon jardin': MyGardenScreen,
  Shopping: ShoppingScreen,
  Settings: SettingsScreen
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        var iconName;
        if (navigation.state.routeName === 'Astuces') {
          iconName = 'lightbulb';
        } else if (navigation.state.routeName === 'Mon jardin') {
          iconName = 'seedling';
        } else if (navigation.state.routeName === 'Shopping') {
          iconName = 'shopping-basket';
        } else if (navigation.state.routeName === 'Settings') {
          iconName = 'cogs';
        }

        return <Icon name={iconName} size={20} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeBackgroundColor: lightGreen,
      activeTintColor: darkGreen,
      inactiveTintColor: green,
    }
  }
);

var Navigation = createAppContainer(BottomNavigator);
export default Navigation;