import React from 'react';
import {View , Image , StyleSheet , Text  } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon , Header } from 'react-native-elements';

import Home from '../screens/Home'
import Humidity from '../screens/Humidity'
import Statistics from '../screens/Statistics'
import Heat from '../screens/Heat'
import Settings from '../screens/Settings'
import ChatBot from '../screens/ChatBot'
import HeatDetails from '../screens/HeatDetails'
import Login from '../screens/Login'
import SimpleBottomNavigation from '../screens/BottomNavigation'

export const HeatHome = StackNavigator({
  Heat: {
    screen: Heat,
    navigationOptions: {
      title: 'Heat',
    },
  },
  Details: {
    screen: HeatDetails,
    navigationOptions: ({ navigation }) => ({
      // title: `${navigation.state.params.heat.DeviceName.toUpperCase()} `,
    }),
  },
});

export const Tabs = TabNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
      },
    },
    HeatHome: {
      screen: Heat,
      navigationOptions: {
        tabBarLabel: 'Heat',
        tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
      },
    },
    Humidity: {
      screen: Humidity,
      navigationOptions: {
        tabBarLabel: 'Humidity',
        tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
      },
    }
    ,
    Statistics: {
        screen: Statistics,
        navigationOptions: {
          tabBarLabel: 'Statistics',
          tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
        },
      },
      ChatBot: {
        screen: ChatBot,
        navigationOptions: {
          tabBarLabel: 'Chat Bot',
          tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
        },
      },
  });

  export const MainTab = TabNavigator({
    TabBar: {
      screen: Tabs,
      navigationOptions: {
        tabBarLabel: 'Volvo Sensor Notifier',
        tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
      },
    }
  });

  export const SettingsStack = StackNavigator({
    Settings: {
      screen: Settings,
      navigationOptions: {
        title: 'Settings',
      },
    },
  });

  export const Root = StackNavigator({
    Tabs: {
      screen: Tabs,
    },
    Settings: {
      screen: SettingsStack,
    },
  }, {
    mode: 'modal',
    headerMode: 'none',
  });


  export const LoginNavigator = StackNavigator({
    Login: { screen: Login,
      navigationOptions: {
        title : 'Volvo Sensor Notifier',
      }
  },
    SuccessLogin: { screen: Root ,navigationOptions: ({ navigation }) => ({
      title: `Welcome ${navigation.state.params.name.toUpperCase()} `,
    }), },
  });

  const ImageHeader = props => (
    <View style={{ backgroundColor: '#eee' }}>
      <Image
        style={StyleSheet.absoluteFill}
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg' }}
      />
      <Header {...props} style={{ backgroundColor: 'transparent' }}/>
    </View>
  );

