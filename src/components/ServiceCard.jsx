import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Subheading, Surface} from 'react-native-paper';
import {moderateScale, scale} from 'react-native-size-matters';
import {normalText, subHeading} from '../utils/styles';

const ServiceCard = ({label, icon, color}) => {
  return (
    <TouchableOpacity style={{width: scale(150)}}>
      <Surface
        style={{
          width: scale(140),
          height: scale(140),
          justifyContent: 'center',
          alignItems: 'center',
          padding: scale(10),
          gap: 10,
          marginBottom: moderateScale(20),
        }}>
        <View
          style={{padding: scale(10), backgroundColor: color, borderRadius: 8}}>
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
