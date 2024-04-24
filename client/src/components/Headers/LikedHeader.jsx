import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

export function LikedHeader () {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Ionicons name="search" size={24} style={styles.icon} />

        <TextInput
          style={styles.inputText}
          numberOfLines={1}
          color
          placeholder="Buscar en tus me gusta"
          placeholderTextColor={'#fff9'}
        />
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Ordenar</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 10,
    marginTop: 10

  },
  input: {
    borderRadius: 15,
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
    backgroundColor: '#fff1'
  },
  icon: {
    color: '#fff'
  },
  inputText: {
    flex: 1,
    color: '#f00'
  },
  button: {
    borderRadius: 15,
    backgroundColor: '#fff1',
    color: '#fff',
    paddingHorizontal: 16,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff'
  }
})
