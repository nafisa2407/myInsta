import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useRef} from 'react';
import {
  THEME_COLOR2,
  WHITE,
  BLACK,
  THEME_COLOR3,
  THEME_COLOR1,
  GRAY,
} from '../utils/Colors';

import CustomStatusBar from '../components/CustomStatusBar';
import CustomButton from '../components/CustomButton';
import {FlatList} from 'react-native-gesture-handler';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from '../helpers/ResponsiveDimension';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Welcome = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef();
  const gotoNextScreen = async () =>{
    AsyncStorage.setItem('hasUserVisited','1');
    navigation.navigate('SignUp');
  }
  const [slideData, setSlideData] = useState([
    {
      title: 'What is Lorem Ipsum What is Lorem Ipsum',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: require('../images/Slide1.png'),
    },
    {
      title: 'What is Lorem Ipsum',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: require('../images/Slide2.png'),
    },
    {
      title: 'What is Lorem Ipsum',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: require('../images/Slide2.png'),
    },
  ]);

  const displayItem = item => {
    console.log('displa', item.title);
    return (
      <View style={styles.slideViewStyle}>
        <Image source={item.image} style={styles.imageStyle} />
        <Text>{item.title}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <View style={styles.flatListParentView}>
        <FlatList
          data={slideData}
          showsHorizontalScrollIndicator={false}
          ref={flatListRef}
          horizontal
          pagingEnabled
          onScroll={e => {
            const x = e.nativeEvent.contentOffset.x;
            const ind = x / responsiveWidth(100);
            setCurrentIndex(ind.toFixed(0));
          }}
          renderItem={({item, index}) => {
            //displayItem(item);
            return (
              <View style={styles.slideViewStyle}>
                <Image source={item.image} style={styles.imageStyle} />
                <Text style={[styles.titleStyle, styles.textStyle]}>
                  {item.title}
                </Text>
                <Text style={[styles.descStyle, styles.textStyle]}>
                  {item.desc}
                </Text>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.indicatorView}>
        {slideData.map((item, index) => {
          return (
            <View
              style={[
                styles.indicator,
                {backgroundColor: currentIndex == index ? THEME_COLOR1 : GRAY},
              ]}
            />
          );
        })}
      </View>
      <View style={styles.btnView}>
        {currentIndex > 0 && (
          <CustomButton
            w={responsiveWidth(35)}
            h={responsiveHeight(5)}
            text={'Previous'}
            color={WHITE}
            bgColor={THEME_COLOR3}
            r={responsiveWidth(5)}
            onClick={() => {
              setCurrentIndex(currentIndex - 1);
              flatListRef.current.scrollToIndex({
                animation: true,
                index: parseInt(currentIndex) - 1,
              });
            }}
          />
        )}
        <CustomButton
          w={responsiveWidth(currentIndex > 0 ? 35 : 70)}
          h={responsiveHeight(5)}
          text={currentIndex < slideData.length - 1?'Next':'Lets Go'}
          color={WHITE}
          bgColor={THEME_COLOR3}
          r={responsiveWidth(5)}
          onClick={() => {
            if (currentIndex < slideData.length - 1) {
              setCurrentIndex(currentIndex + 1);
              flatListRef.current.scrollToIndex({
                animation: true,
                index: parseInt(currentIndex) + 1,
              });
            }
            else{
              gotoNextScreen();
            }
          }}
        />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideViewStyle: {
    width: responsiveWidth(100),
    height: responsiveHeight(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: '70%',
    height: '50%',
  },
  titleStyle: {
    fontSize: responsiveFontSize(3),
    marginTop: responsiveHeight(3),
  },
  descStyle: {
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(2),
  },
  textStyle: {
    fontColor: BLACK,
    width: '70%',
    textAlign: 'center',
  },
  flatListParentView: {
    width: responsiveWidth(100),
    height: responsiveHeight(50),
  },
  indicatorView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(5),
  },
  indicator: {
    backgroundColor: THEME_COLOR2,
    width: responsiveWidth(7),
    height: responsiveWidth(2),
    borderRadius: responsiveWidth(4),
    marginLeft: responsiveWidth(2),
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: responsiveHeight(4),
  },
});
