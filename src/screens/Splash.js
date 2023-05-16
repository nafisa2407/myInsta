import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {THEME_COLOR2, WHITE} from '../utils/Colors';
import {APP_NAME} from '../utils/Strings';
import CustomStatusBar from '../components/CustomStatusBar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      CheckUserFlow();
      
    }, 2000);
  }, []);

  const CheckUserFlow = async () =>{
    checkUser = await AsyncStorage.getItem('hasUserVisited');
    if(checkUser)navigation.navigate('SignUp');
    else navigation.navigate('Welcome');
  }
  return (
    <View style={styles.container}>
      <CustomStatusBar bgColor={THEME_COLOR2} content={'light-content'} />
      <View style={styles.logoViewStyle}>
        <Text style={styles.logoStyle}>{APP_NAME}</Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME_COLOR2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    fontSize: 28,
    color: THEME_COLOR2,
    fontWeight: '900',
  },
  logoViewStyle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
