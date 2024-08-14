import {View, Text} from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import {TextInput} from 'react-native-paper';
import Button from '../../components/Button';
import {heading} from '../../utils/styles';
import {verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

const AddPassword = () => {
  const {navigate} = useNavigation();

  const addPassword = async () => {
    navigate('Login');
  };

  return (
    <Container>
      <Text style={heading}>Add Password</Text>
      <View
        style={{
          gap: verticalScale(10),
          marginTop: verticalScale(20),
          marginBottom: verticalScale(50),
        }}>
        <TextInput label="Enter Password" />
        <TextInput label="Confirm Password" />
      </View>
      <Button label="Continue" onPress={addPassword} />
    </Container>
  );
};

export default AddPassword;
