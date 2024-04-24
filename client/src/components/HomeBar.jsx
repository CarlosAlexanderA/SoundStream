import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ButtonBig } from './buttons/ButtonBig'

export function HomeBar () {
  return (
    <View>
      <View style={styles.buttonsView}>
        <ButtonBig>
          Play
        </ButtonBig>
        <ButtonBig>
          Aleatorio
        </ButtonBig>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 80
  }
})
