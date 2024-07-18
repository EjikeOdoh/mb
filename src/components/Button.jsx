import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';

const Button = ({label, onPress, width = '100%'}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'tomato',
        height: 50,
      }}>
      <Text
        style={{
          fontFamily: 'Montserrat-Bold',
          fontSize: moderateScale(14),
          color: 'white',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
