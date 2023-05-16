import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({w, h, text, color, bgColor, r, onClick, isCenter,isMarginTop}) => {
  return (
    <TouchableOpacity
      style={{
        width: w,
        height: h,
        backgroundColor: bgColor,
        borderRadius: r,
        justifyContent:'center',
        alignItems:'center',
        alignSelf: isCenter?'center':null,
        marginTop: isMarginTop?isMarginTop:0
      }}
      onPress={() => {
        onClick();
      }}>
      <Text style={{color}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
