import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';

const GoogleBtn = () => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        backgroundColor: 'pink',
        height: 50,
      }}>
      <Image source={require('../assets/icons/google.png')} />
      <Text
        style={{
          fontFamily: 'Montserrat-Bold',
          fontSize: moderateScale(14),
          color: 'white',
        }}>
        Sign up with Google
      </Text>
    </TouchableOpacity>
  );
};

export default GoogleBtn;
