import { AntDesign } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export function InfoSquare ({ title, imgUrl, mediaItem, owner, total, anchored }) {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.containImage,
          { borderRadius: mediaItem === 'Artista' ? 100 : 10 }
        ]}
      >
        {imgUrl
          ? (
          <Image style={styles.image} source={{ uri: imgUrl }} />
            )
          : (
          <LinearGradient
            colors={['#2655ff', 'rgba(255,255,255, 1)']}
            style={{ flex: 1, width: '100%', height: 120, justifyContent: 'center', alignItems: 'center' }}
            start={{ x: 0.4, y: 0.5 }}
            end={{ x: 1, y: 0.9 }}

          >
            <Image
              style={[styles.image, { width: 70, height: 70 }]}
              source={require('./../../../assets/white-heart.png')}
            />
          </LinearGradient>
            )}
      </View>
      <View style={styles.labelInfo}>
        <Text style={styles.infoTitle} numberOfLines={2} >{title}</Text>
        <View style={styles.description}>
          {anchored && <AntDesign name="pushpin" size={15} color="#2AD164" style={{ marginRight: 5 }}/>}
          <Text style={styles.infoNormal} numberOfLines={1}>{mediaItem} · </Text>
          {owner !== 'Artista' && <Text style={[styles.infoNormal, { flexShrink: 1 }]} numberOfLines={1}>{owner}</Text>}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#a2d',
    gap: 8
  },
  containImage: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center'
    // backgroundColor: '#f2f'
  },
  labelInfo: {
    gap: 5,
    flex: 1
  },
  infoTitle: {
    color: '#fff',
    fontWeight: 'normal'
  },
  description: {
    flexDirection: 'row',
    flex: 1,
    gap: 0
  },
  infoNormal: {
    color: '#fff8',
    fontSize: 12

  },

  image: {
    width: '100%',
    height: 120,
    // aspectRatio: '1/1',
    resizeMode: 'cover'
  }
})
