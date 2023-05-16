import {
  StyleSheet,
  Text,
  TouchableOpacity,

  View,
  Image,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {BLACK, WHITE, THEME_COLOR2} from '../utils/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../helpers/ResponsiveDimension';
import {TextInput} from 'react-native-gesture-handler';
import CustomTextField from '../components/CustomTextField';
import CustomButton from '../components/CustomButton';
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';

const Login = ({navigation}) => {
  //Check this later
  // const refName = useRef();
  // const refEmail = useRef();
  // const refPhone = useRef();
  // const refPass = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [wrongName, setWrongName] = useState();
  const [wrongEmail, setWrongEmail] = useState();
  const [wrongPhone, setWrongPhone] = useState();
  const [wrongPassword, setWrongPassword] = useState();

 

  const signUpLogin = () => {
    navigation.navigate('SignUp');
  };

  
  return (
    <View style={styles.container}>
      <Image source={require('../images/login.png')} style={styles.imgStyle} />
      <Text style={styles.title}>Login</Text>
      
     
      <CustomTextField
        icon={require('../images/email.png')}
        placeholder={'Enter your email'}
        type={'email-address'}
        value={email}
        onChangeText={txt => setEmail(txt)}
      />
      {wrongEmail && (
        <Text style={styles.errorText}>{'Enter Valid Email'}</Text>
      )}

     

      <CustomTextField
        icon={require('../images/password.png')}
        placeholder={'Enter your password'}
        value={password}
        secureText
        onChangeText={txt => setPassword(txt)}
        handleCheckEmail={() => handleValidEmail()}
        //ref1={refPass}
      />
      {wrongPassword && (
        <Text style={styles.errorText}>{'Enter Valid Password'}</Text>
      )}

      <CustomButton
        isMarginTop={responsiveHeight(2)}
        isCenter={true}
        w={responsiveWidth(80)}
        h={responsiveHeight(6)}
        text={'Login'}
        color={WHITE}
        bgColor={THEME_COLOR2}
        r={responsiveHeight(2)}
        onClick={() => validateData()}
      />

      <View style={styles.loginView}>
        <Text>{'Dont have an account?'}</Text>
        <Text
          style={{color: 'blue'}}
          onPress={() => {
            signUpLogin();
          }}>
          {' Sign Up'}
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    // alignItems:'center',
  },
  imgStyle: {
    width: responsiveWidth(90),
    height: responsiveHeight(30),
    marginTop: responsiveHeight(1),
    // borderColor:'red',
    // borderWidth:1,
    alignSelf: 'center',
  },
  btnStyle: {
    width: responsiveWidth(100),
    height: responsiveHeight(6),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: responsiveHeight(3),
  },
  title: {
    fontSize: responsiveFontSize(4),
    marginLeft: responsiveWidth(5),
    color: BLACK,
    fontWeight: '700',
    marginTop:responsiveHeight(3),
  },
  box1: {
    flex: 1,
    backgroundColor: 'yellow',
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
  loginView: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
  },
  errorText: {
    fontSize: responsiveFontSize(1.5),
    color: 'red',
    alignSelf: 'center',
  },
});
