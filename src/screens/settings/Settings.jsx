import {View, Text, TouchableOpacity, useColorScheme} from 'react-native';
import React, {useState} from 'react';
import Container from '../../components/Container';
import {
  colors,
  heading,
  italicText,
  normalText,
  subHeading,
} from '../../utils/styles';
import {Surface, Switch} from 'react-native-paper';
import {scale, verticalScale} from 'react-native-size-matters';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

const Row = ({icon, label, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(20),
        borderWidth: 1,
        paddingVertical: scale(5),
        borderRadius: scale(5),
        borderColor: 'transparent',
        backgroundColor: colors.gray,
        paddingHorizontal: scale(20),
        height: verticalScale(50),
      }}
      onPress={onPress}>
      <MIcon name={icon} size={scale(25)} />
      <Text style={normalText}>{label}</Text>
    </TouchableOpacity>
  );
};

const Settings = () => {
  const {navigate} = useNavigation();
  let dark = useColorScheme();

  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <Container>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: scale(10),
          marginVertical: verticalScale(20),
        }}>
        <Surface
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
            borderWidth: 3,
            borderColor: 'white',
            backgroundColor: colors.black,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}>
          <Text style={{...heading, color: 'white'}}>JE</Text>
        </Surface>
        <View>
          <Text style={subHeading}>Ejike Jude</Text>
          <TouchableOpacity onPress={() => navigate('Profile')}>
            <Text style={italicText}>View Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Text style={subHeading}>Preference</Text>
        <View
          style={{marginVertical: verticalScale(10), gap: verticalScale(10)}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: colors.gray,
              paddingHorizontal: scale(20),
              paddingVertical: scale(5),
              //   marginLeft: scale(20),
              borderRadius: scale(5),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: scale(20),
              }}>
              <MIcon name="theme-light-dark" size={scale(30)} />
              <View>
                <Text style={normalText}>Theme Settings</Text>
                <Text style={italicText}>Light Mode</Text>
              </View>
            </View>
            <Switch value={isSwitchOn} onChange={onToggleSwitch} />
          </View>

          <Row label="Change Payment Method" icon="credit-card" />
        </View>
      </View>
      <View>
        <Text style={subHeading}>Security</Text>
        <View
          style={{marginVertical: verticalScale(10), gap: verticalScale(10)}}>
          <Row label="Change Password" icon="key" />
          <Row label="Logout" icon="logout" />
        </View>
      </View>
    </Container>
  );
};

export default Settings;
