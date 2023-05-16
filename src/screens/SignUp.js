import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
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

const SignUp = ({navigation}) => {
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

  const validateData = () => {
    let valid = true;
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    /** Name Validation */
    if (name == '' || name.length < 6) {
      valid = false;
      setWrongName(true);
    } else {
      setWrongName(false);
      valid = true;
    }

    /** Email Validation */
    if (re.test(email) || regex.test(email)) {
      valid = true;
      setWrongEmail(false);
    } else {
      valid = false;
      setWrongEmail(true);
    }

    /** Phone Validation */
    if (phone == '' || phone.length < 10) {
      console.log(false || true);
      valid = false;
      setWrongPhone(true);
    } else {
      valid = true;
      setWrongPhone(false);
    }

    /** Password Validation */
    if (password == '' || password.length < 8) {
      valid = false;
      setWrongPassword(true);
    } else {
      valid = true;
      setWrongPassword(false);
    }

    if (valid) {
      registerUser();
      navigation.navigate('Home');
    }
  };

  const gotoLogin = () => {
    navigation.navigate('Login');
  };

  const registerUser = () => {
    const usersCollection = firestore().collection('Users');
    firestore()
      .collection('Users')
      .add({
        userId: uuid.v4(),
        name: name,
        email: email,
        phone: phone,
        password: password,
      })
      .then(() => {
        console.log('User added!');
      });
  };
  return (
    <ScrollView style={styles.container}>
      <Image source={require('../images/signup.png')} style={styles.imgStyle} />
      <Text style={styles.title}>Sign Up</Text>
      <CustomTextField
        icon={require('../images/name.png')}
        placeholder={'Enter your name'}
        value={name}
       
        onChangeText={txt => setName(txt)}
      />
      {wrongName && <Text style={styles.errorText}>{'Enter Valid Name'}</Text>}
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
        icon={require('../images/call.png')}
        placeholder={'Enter your phone number'}
        type={'phone-pad'}
        value={phone}
        onChangeText={txt => setPhone(txt)}
        //ref1={refPhone}
        // toRef={refPass}
      />
      {wrongPhone && (
        <Text style={styles.errorText}>{'Enter Valid Phone number'}</Text>
      )}

      <CustomTextField
        icon={require('../images/password.png')}
        placeholder={'Enter your password'}
        value={password}
        secureText
        onChangeText={txt => setPassword(txt)}
        onSubmit={() => validateData()}
        
      
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
        text={'Sign Up'}
        color={WHITE}
        bgColor={THEME_COLOR2}
        r={responsiveHeight(2)}
        onClick={() => validateData()}
      />

      <View style={styles.loginView}>
        <Text>{'Already have an account?'}</Text>
        <Text
          style={{color: 'blue'}}
          onPress={() => {
            gotoLogin();
          }}>
          {' Login'}
        </Text>
      </View>
    </ScrollView>
  );
};

export default SignUp;

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
    marginTop: responsiveHeight(2),
  },
  title: {
    fontSize: responsiveFontSize(4),
    marginLeft: responsiveWidth(5),
    color: BLACK,
    fontWeight: '700',
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
