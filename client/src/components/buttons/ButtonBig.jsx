import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

export function ButtonBig ({ children }) {
  return (
    <Pressable
    style={({ pressed }) => [
      styles.button,
      { opacity: pressed ? 0.7 : 1 }
    ]}
     >
      <Text style={styles.buttonLabel}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff3',
    paddingHorizontal: 16,
    paddingVertical: 10,
    flex: 1,
    borderRadius: 10

  },
  buttonLabel: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold'
  }
})
