import { SimpleLineIcons } from '@expo/vector-icons'
import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

export function CardInfo ({ name, artist, imageUrl, color = '#fff' }) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{ uri: imageUrl }}
          resizeMethod="auto"
          resizeMode="cover"
        />
      </View>
      <View style={styles.containerText}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.textPrimary, { color }]} numberOfLines={1}>
            {name}
          </Text>
        </View>

        <Text style={styles.textSecond}>{artist}</Text>
      </View>
      <Pressable >
        <SimpleLineIcons name="options" size={15} style={styles.icon} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 2
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#fff3'
  },
  containerText: {
    flex: 1
  },
  textPrimary: {
    flex: 1,
    marginRight: 20
  },
  textSecond: {
    color: '#fff9'
  },
  icon: {
    color: '#fff'
  }
})
