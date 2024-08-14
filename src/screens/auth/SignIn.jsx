import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import Input from '../../components/Input';
import {colors, heading, normalText} from '../../utils/styles';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {verticalScale} from 'react-native-size-matters';
import {useDispatch} from 'react-redux';
import {setServices} from '../../redux/slices/serviceSlice';

const SignIn = () => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  const register = () => {
    navigate('SignUp');
  };

  const forgotPassword = () => navigate('ForgotPassword');

  const signIn = async () => {
    try {
      navigate('Main', {screen: 'Home'});
      const data = await api.get('/services');
      console.log(data);
      dispatch(setServices(data));
    } catch (error) {
      console.log({...error});
    }
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
      </View>
      <View>
        <Text style={heading}>Mbtronics</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={normalText}>Don't have an account? </Text>
          <TouchableOpacity onPress={register}>
            <Text style={{...normalText, color: colors.blue}}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginVertical: 40}}>
        <Input label="Phone Number" type="phone" />
        <Input label="Password" type="password" />
      </View>

      <Button label="Log in" onPress={signIn} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginVertical: verticalScale(20),
        }}>
        <TouchableOpacity onPress={forgotPassword}>
          <Text style={{...normalText, color: colors.blue}}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default SignIn;
