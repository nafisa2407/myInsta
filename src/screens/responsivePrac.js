import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BLACK, WHITE} from '../utils/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../helpers/ResponsiveDimension';
import {TextInput} from 'react-native-gesture-handler';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.title}>SignUp</Text>
      </View>
      <View style={styles.box2}>
        <TextInput
          placeholder={'Enter email ID'}
          style={styles.txtInputStyle}></TextInput>

        <TextInput
          placeholder={'Enter email ID'}
          style={styles.txtInputStyle}></TextInput>

        <TextInput
          placeholder={'Enter email ID'}
          style={styles.txtInputStyle}></TextInput>

        <TextInput
          placeholder={'Enter email ID'}
          style={styles.txtInputStyle}></TextInput>

        <TextInput
          placeholder={'Enter email ID'}
          style={styles.txtInputStyle}></TextInput>
      </View>
      <View style={styles.box3}>
        <TouchableOpacity style={styles.btnStyle}>
          <Text>SignUp</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box4}>
        <Text>Already have an account</Text>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  btnStyle: {
    width: responsiveWidth(80),
    height:responsiveHeight(6),
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    alignSelf:'center',
    marginTop:responsiveHeight(2),
  },
  title: {
    fontSize: responsiveFontSize(4),
    alignSelf: 'center',
    color: BLACK,
  },
  box1: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    flex: 2,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box3: {
    flex: 1,
    backgroundColor: 'cyan',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box4: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtInputStyle: {
    width: responsiveWidth(80),
    height: responsiveHeight(5),
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
  },
});
