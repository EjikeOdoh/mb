import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Subheading, Surface} from 'react-native-paper';
import {moderateScale, scale} from 'react-native-size-matters';
import {colors, normalText, subHeading} from '../utils/styles';

const ServiceCard = ({label, icon, color, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{overflow: 'hidden', borderRadius: scale(10)}}>
      <Surface
        style={{
          width: scale(140),
          height: scale(140),
          justifyContent: 'center',
          alignItems: 'center',
          padding: scale(10),
          gap: 10,
          backgroundColor: colors.gray,
        }}>
        <View
          style={{
            padding: scale(10),
            backgroundColor: color,
            borderRadius: scale(5),
          }}>
          <Image source={icon} />
        </View>
        <Text
          style={{
            ...subHeading,
            textAlign: 'center',
            fontSize: moderateScale(14),
            lineHeight: moderateScale(14),
          }}>
          {label}
        </Text>
      </Surface>
    </TouchableOpacity>
  );
};

export default ServiceCard;
