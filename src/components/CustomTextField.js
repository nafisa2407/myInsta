import { StyleSheet, Text, View,Image, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import {BLACK, GRAY, WHITE} from '../utils/Colors';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from '../helpers/ResponsiveDimension';
const CustomTextField = ({icon,placeholder,value,onChangeText,type,onSubmit,secureText}) => {
  
    useEffect(()=>{

    },[])

    
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.imgStyle}/>
      <TextInput
          placeholder={placeholder}
          style={styles.txtInputStyle}
          value={value}
        keyboardType={type}
         
          secureTextEntry = {secureText}
          onChangeText={text => onChangeText(text)}
          onSubmitEditing={()=>onSubmit()}
          />
         
    </View>
  )
}

export default CustomTextField

const styles = StyleSheet.create({
container: {
    width: responsiveWidth(90),
    height:responsiveHeight(7),
    backgroundColor: WHITE,
    flexDirection:'row',
    marginTop:responsiveHeight(1),
   // borderWidth:1,
   alignItems:'center',
   alignSelf:'center'
   //paddingHorizontal:responsiveWidth(2),
  },
  imgStyle:{
    width: responsiveWidth(6),
    height:responsiveWidth(6),
    marginTop: responsiveHeight(1),

    // borderColor:'red',
    // borderWidth:1,
   
  },
  txtInputStyle: {
    width: '80%',
    height: responsiveHeight(6),
    borderBottomColor: GRAY,
    borderBottomWidth:1,
    marginLeft:responsiveWidth(2),
//     marginTop: responsiveHeight(1),
  },
})