import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import Algo from './Algo'

import { NavigationContainer } from '@react-navigation/native'
import { HomeHeader } from './components/Headers/HomeHeader'

const Tab = createBottomTabNavigator()

export default function main () {
  return (
    <View style={styles.container}>
      <NavigationContainer theme={{
        colors: {
          background: 'rgba(52, 52, 52, 0)'
        }
      }} >
        <Tab.Navigator initialRouteName="Home" >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{ header: HomeHeader }}
          />
          <Tab.Screen name="Algo" component={Algo} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 10 }
})
