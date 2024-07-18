import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import Input from '../../components/Input';
import {heading, normalText} from '../../utils/styles';
import Button from '../../components/Button';

const SignIn = () => {
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
          <TouchableOpacity>
            <Text style={{...normalText, color: 'tomato'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Button label="Log in" />
    </Container>
  );
};

export default SignIn;
