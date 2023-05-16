import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {BLACK, WHITE, THEME_COLOR2} from '../utils/Colors';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE,
        alignItems:'center',
        justifyContent:'center'
      },
      title:{
        color:THEME_COLOR2,
        fontSize:24
      }
})