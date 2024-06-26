import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './pages/Home'
import Algo from './Algo'

import { NavigationContainer } from '@react-navigation/native'
import { HomeHeader } from './components/Headers/HomeHeader'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import Liked from './pages/Liked'
import { LikedHeader } from './components/Headers/LikedHeader'
import { LibraryHeader } from './components/Headers/LibraryHeader'
import { Library } from './pages/Library'

const Tab = createBottomTabNavigator()

export default function main () {
  const [isFocus, setIsFocus] = useState(null)

  return (
    <View style={styles.container}>
      <NavigationContainer
        theme={{
          colors: {
            primary: '#fff',
            // background: 'rgba(52, 52, 52, 0)',
            card: '#181818',
            text: '#d6d6d6'
          }
        }}
      >
        <LinearGradient
          colors={['#4bc8', 'rgba(52, 52, 52, 0)']} // Array de colores para el degradado (transparente a #4bc)
          style={{ flex: 1 }} // Asegúrate de que el degradado ocupe todo el espacio disponible
        >
          <Tab.Navigator initialRouteName="Home" screenOptions={{}}>
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                header: HomeHeader,
                tabBarLabel: 'Inicio',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="home-variant"
                    size={size}
                    color={color}
                  />
                  // <MaterialCommunityIcons name="home-variant-outline" size={size} color={color} />
                )
              }}
            />
            <Tab.Screen
              name="Liked"
              component={Liked}
              options={{
                header: LikedHeader,
                tabBarLabel: 'Tus me gusta',
                tabBarIcon: ({ color, size }) => (
                  <AntDesign name="heart" size={size} color={color} />
                  // <AntDesign name="hearto" size={size} color={color} />
                )
              }}
            />
            <Tab.Screen
              name="Library"
              component={Library}
              options={{
                header: LibraryHeader,
                tabBarLabel: 'Biblioteca',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="library" size={size} color={color} />
                  // <Ionicons name="library-outline" size={size} color={color} />
                )
              }}
            />
          </Tab.Navigator>
        </LinearGradient>
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 }
})
