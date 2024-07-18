import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Input from '../../components/Input';
import Container from '../../components/Container';
import Button from '../../components/Button';
import HR from '../../components/HR';
import GoogleBtn from '../../components/GoogleBtn';
import {heading, normalText} from '../../utils/styles';

const SignUp = () => {
  return (
    <Container>
      <View style={{marginVertical: 40}}>
        <Text style={heading}>Create your account</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={normalText}>Have an account? </Text>
          <TouchableOpacity>
            <Text style={{...normalText, color: 'tomato'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginBottom: 20}}>
        <View style={{flexDirection: 'row', gap: 20}}>
          <Input label="First Name" />
          <Input label="Last Name" />
        </View>
        <Input label="Email" type="email" />
        <Input label="Phone Number" type="phone" />
        <Input label="Password" type="password" />
      </View>
      <Button label="Create your account" />

      <HR label="OR" />

      <GoogleBtn />
    </Container>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
