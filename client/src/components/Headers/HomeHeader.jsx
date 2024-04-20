import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { truncatePlaceholder } from '../../utils'

export function HomeHeader () {
  return (
    <View style={styles.container}>
      <Ionicons name="options" size={24} style={styles.icon} />
      <View style={styles.textInput}>
        <Ionicons name="search" size={24} style={styles.icon} />
        <TextInput numberOfLines={1} placeholder={'Busca canciones,listas de reproduccion, artistas, albunes, podcast'} placeholderTextColor={'#fff'}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 15
  },
  textInput: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#fff',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    flexDirection: 'row',
    gap: 10,
    flex: 1
  },
  icon: {
    color: '#fff'
  }
})
