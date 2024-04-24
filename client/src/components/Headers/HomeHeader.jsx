import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

export function HomeHeader () {
  return (
    <View style={styles.container}>
      <View style={styles.iconView}>
      <Ionicons name="options" size={24} style={styles.icon} />

      </View>
      <View style={styles.textInput}>
        <Ionicons name="search" size={24} style={styles.icon} />
        <TextInput numberOfLines={1} placeholder={'Busca canciones, listas de reproduccion, artistas, albunes, podcast'} placeholderTextColor={'#fff'}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 10,
    marginTop: 10

  },
  textInput: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#fff',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1
  },
  iconView: {
  },
  icon: {
    color: '#fff'
  }
})
