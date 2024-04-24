import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { Pressable, StyleSheet } from 'react-native'

export function Play () {
  return (
    <Pressable style={styles.button}>
      <FontAwesome name="play" size={24} color="black" />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1DB954',
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
