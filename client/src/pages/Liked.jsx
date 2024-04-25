import React from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { Play } from '../components/buttons/Play'
import { FontAwesome } from '@expo/vector-icons'
import { dataJson } from '../../data'
import { CardInfo } from '../components/cards/CardInfo'

export default function Liked () {
  return (
    <View style={styles.container}>
      <View style={styles.rowContent}>
        <View>
          <Text style={styles.title}>Tus me gusta</Text>
          <Text style={styles.normal}>502 canciones</Text>
        </View>
        <View style={styles.buttons}>
          <Pressable style={styles.button}>
            <FontAwesome name="random" size={24} color="#fff" />
          </Pressable>
          <Play />
        </View>
      </View>
      {/* list of music liked */}
     <FlatList style={styles.cardsContainer} data={dataJson} renderItem={({ item }) => <CardInfo {...item}/>} />

    </View>
  )
}
const styles = StyleSheet.create({
  container: { paddingHorizontal: 10 },
  rowContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold'
  },
  normal: {
    color: '#fff8'
  },
  buttons: {
    flexDirection: 'row',
    gap: 10
  },
  button: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
