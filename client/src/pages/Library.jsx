import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { libraryJson, libraryOptions } from '../../data'
import { FlatGrid } from 'react-native-super-grid'
import { InfoSquare } from '../components/cards/InfoSquare'

export function Library () {
  return (
    <View>
      <View style={styles.nav}>
        {libraryOptions.map(item => (
          <Pressable key={item.name} style={styles.navLabel}>
            <Text style={styles.navText}>{item.name}</Text>
          </Pressable>
        ))}
      </View>
<FlatGrid
  itemDimension={110}
  data={libraryJson}
  renderItem={({ item }) => (<InfoSquare {...item}/>)}
/>
    </View>
  )
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 5
  },
  navLabel: {
    backgroundColor: '#fff4',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 50
  },
  navText: {
    color: '#fff',
    fontWeight: 'bold'
  }
})
