import {View, StatusBar} from 'react-native';
import React from 'react';
const CustomStatusBar = ({bgColor,content}) => {
  return (
    <View>
      <StatusBar backgroundColor={bgColor} barStyle={content} />
    </View>
  );
};

export default CustomStatusBar;
