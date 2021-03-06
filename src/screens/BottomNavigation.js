import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-elements'

export default class SimpleBottomNavigation extends Component {
  render() {
    return (
      <BottomNavigation
      labelColor="white"
      rippleColor="white"
      style={{
        height: 56,
        elevation: 8,
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0
      }}
      onTabChange={newTabIndex => alert(`New Tab at position ${newTabIndex}`)}
    >
      <Tab
        barBackgroundColor="#37474F"
        label="Movies & TV"
        icon={<Icon size={24} color="white" name="tv" />}
      />
      <Tab
        barBackgroundColor="#00796B"
        label="Music"
        icon={<Icon size={24} color="white" name="music-note" />}
      />
      <Tab
        barBackgroundColor="#5D4037"
        label="Books"
        icon={<Icon size={24} color="white" name="book" />}
      />
      <Tab
        barBackgroundColor="#3E2723"
        label="Newsstand"
        icon={<Icon size={24} color="white" name="newspaper" />}
      />
    </BottomNavigation>
    )
  }
}

const styles = StyleSheet.create({
  bottomNavigation: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 56
  }
})
