import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export function LibraryHeader () {
  return (
    <View style={styles.container}>
      <View style={styles.rowContent}>
        <View style={styles.userInfoContainer}>
        <View>
        <FontAwesome name="user-circle-o" size={28} color="#fff" />
        </View>
          <Text style={styles.title}>Tu Biblioteca</Text>
        </View>
        <View style={styles.buttons}>
          <Pressable style={styles.button}>
          <Ionicons name="search" size={28} color="#fff" style={styles.icon} />
          </Pressable>
          <Pressable style={styles.button}>
          <AntDesign name="plus" size={28} color="#fff" />
          </Pressable>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: { paddingHorizontal: 10 },
  rowContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10
  },
  userInfoContainer: {
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  buttons: {
    flexDirection: 'row',
    gap: 10
  },
  button: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
