import {View, Text} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-paper';
import {normalText} from '../utils/styles';
import {scale} from 'react-native-size-matters';

const HR = ({label}) => {
  return (
    <View
      style={{
        position: 'relative',
        height: 20,
        marginTop: scale(30),
        marginBottom: scale(20),
      }}>
      <View
        style={{
          position: 'absolute',
          alignSelf: 'center',
          backgroundColor: 'white',
          top: -5,
          zIndex: 2,
          paddingHorizontal: 5,
        }}>
        <Text style={normalText}>{label}</Text>
      </View>
      <Divider bold />
    </View>
  );
};

export default HR;
