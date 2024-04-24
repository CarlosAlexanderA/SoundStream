import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { HomeBar } from './components/HomeBar'
import { CardInfo } from './components/cards/CardInfo'
import { dataJson } from '../data'
export default function Home () {
  return (
    <View style={styles.container} >

      <HomeBar />
     <FlatList style={styles.cardsContainer} data={dataJson} renderItem={({ item }) => <CardInfo {...item}/>} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10

  },
  cardsContainer: {
    marginVertical: 10
  }
})
