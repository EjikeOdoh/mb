import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {colors} from '../utils/styles';

const Button = ({label, onPress, width = '100%', disabled = false}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: disabled ? colors.gray : colors.primary,
        height: verticalScale(50),
        borderRadius: moderateScale(10),
        marginBottom: verticalScale(5),
      }}
      disabled={disabled}>
      <Text
        style={{
          fontFamily: 'Montserrat-Bold',
          fontSize: moderateScale(14),
          color: disabled ? 'gray' : 'white',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
