import {View, Text} from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import {TextInput} from 'react-native-paper';
import {heading, normalText, tinyText} from '../../utils/styles';
import Button from '../../components/Button';
import {verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

const ForgotPassword = () => {
  const {navigate} = useNavigation();
  const resetPassword = async () => {
    navigate('CheckEmail');
  };
  return (
    <Container>
      <View>
        <Text style={heading}>Forgot Password</Text>
        <Text style={tinyText}>
          Enter your account email, and we'll send you steps to reset your
          password.
        </Text>
      </View>
      <View
        style={{marginTop: verticalScale(20), marginBottom: verticalScale(50)}}>
        <TextInput label="Email Address" />
      </View>

      <Button label="Reset Password" onPress={resetPassword} />
    </Container>
  );
};

export default ForgotPassword;
