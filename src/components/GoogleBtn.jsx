import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../utils/styles';

const GoogleBtn = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: scale(20),
        borderWidth: 1,
        borderColor: colors.gray,
        backgroundColor: colors.gray,
        height: verticalScale(50),
        borderRadius: moderateScale(10),
      }}>
      <Image
        source={require('../assets/icons/google.png')}
        style={{height: 40, width: 40}}
      />
      <Text
        style={{
          fontFamily: 'Montserrat-Bold',
          fontSize: moderateScale(14),
        }}>
        Sign up with Google
      </Text>
    </TouchableOpacity>
  );
};

export default GoogleBtn;
