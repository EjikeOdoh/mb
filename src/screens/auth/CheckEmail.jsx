import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import {colors, heading, normalText, tinyText} from '../../utils/styles';
import {verticalScale} from 'react-native-size-matters';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

const CheckEmail = () => {
  const {navigate} = useNavigation();

  const backtoLogin = () => {
    navigate('Login');
  };
  return (
    <Container>
      <Text style={heading}>Check Your Email</Text>
      <View style={{marginVertical: verticalScale(20)}}>
        <Image
          source={require('../../assets/icons/mail.png')}
          resizeMode="contain"
          style={{backgroundColor: 'white'}}
        />
      </View>

      <View style={{marginBottom: verticalScale(50)}}>
        <Text style={normalText}>
          We've sent instructions to reset your password to your email.
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Text style={tinyText}>
            Didn't get the email? Check your spam folder or
          </Text>
          <TouchableOpacity>
            <Text style={{...tinyText, color: colors.primary}}>
              send it again.
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Button label="Back to Login" onPress={backtoLogin} />
    </Container>
  );
};

export default CheckEmail;
