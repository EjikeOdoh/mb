import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import Input from '../../components/Input';
import {colors, heading, normalText} from '../../utils/styles';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

const SignIn = () => {
  const {navigate} = useNavigation();

  const register = () => {
    navigate('SignUp');
  };

  const signIn = async () => {
    await navigate('Main', {screen: 'Home'});
  };

  return (
    <Container>
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 40,
        }}>
        <Image source={require('../../assets/image/logo.png')} />
        <Text style={heading}>mbtronics</Text>
      </View>
      <View style={{marginVertical: 40}}>
        <Input label="Phone Number" type="phone" />
        <Input label="Password" type="password" />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <Text style={normalText}>Don't have an account? </Text>
          <TouchableOpacity onPress={register}>
            <Text style={{...normalText, color: colors.blue}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Button label="Log in" onPress={signIn} />
    </Container>
  );
};

export default SignIn;
