import {View, StatusBar} from 'react-native';
import React from 'react';
import {THEME_COLOR2} from '../utils/Colors'
const CustomStatusBar = ({bgColor,content}) => {
  return (
    <View>
      <StatusBar backgroundColor={bgColor?bgColor:THEME_COLOR2} barStyle={content?content:'light-content'} />
    </View>
  );
};

export default CustomStatusBar;
