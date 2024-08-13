import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Input from '../../components/Input';
import Container from '../../components/Container';
import Button from '../../components/Button';
import HR from '../../components/HR';
import GoogleBtn from '../../components/GoogleBtn';
import {colors, heading, normalText} from '../../utils/styles';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-paper';
import {verticalScale} from 'react-native-size-matters';

const inputStyle = {height: 56, flex: 1};

const SignUp = () => {
  const {navigate} = useNavigation();

  const [hidePass, setHidePass] = useState(false);

  const register = async () => {
    await navigate('Main', {screen: 'Home'});
  };

  return (
    <Container>
      <View style={{marginVertical: 40}}>
        <Text style={heading}>Create your account</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={normalText}>Have an account? </Text>
          <TouchableOpacity onPress={() => navigate('Login')}>
            <Text style={{...normalText, color: colors.blue}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginBottom: 20}}>
        <View
          style={{
            flexDirection: 'row',
            gap: 20,
            marginBottom: verticalScale(20),
          }}>
          <TextInput
            label="First Name"
            style={inputStyle}
            contentStyle={normalText}
          />
          <TextInput
            label="Last Name"
            style={inputStyle}
            contentStyle={normalText}
          />
          {/* 
          <Input label="First Name" />
          <Input label="Last Name" /> */}
        </View>
        <Input label="Email" type="email" />
        <Input label="Phone Number" type="phone" />
        <TextInput
          right={
            <TextInput.Icon
              icon="eye"
              onPress={() => setHidePass(!hidePass)}
              style={{zIndex: 10}}
            />
          }
        />
      </View>
      <Button label="Create your account" onPress={register} />

      <HR label="OR" />

      <GoogleBtn />
    </Container>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
