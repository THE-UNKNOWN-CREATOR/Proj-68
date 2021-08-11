import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation';
import FaceBook from './Screens/FaceBook'
import Instagram from './Screens/Instagram'

export default class App extends React.Component {
  
  render()
  {
    return (
        <AppContainor />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const BottomTab = createBottomTabNavigator({
  Instagram: {screen:Instagram},
  FaceBook: {screen:FaceBook}
})

const AppContainor = createAppContainer(BottomTab);