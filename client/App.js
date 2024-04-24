import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'
import Main from './src/Main'

export default function App () {
  return (
    <View style={styles.container}>
      <Main />
      <StatusBar style="light" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#181818'
  }
})
