import {View} from 'react-native';
import React from 'react';
import {HelperText, TextInput} from 'react-native-paper';
import {
  validateEmail,
  validatePassword,
  validatePhone,
  validateVin,
} from '../utils/validators';
import {errorText, normalText} from '../utils/styles';

const Input = ({label, type, placeholder, getText}) => {
  const [text, setText] = React.useState('');
  const [error, setError] = React.useState(null);

  const onChangeText = text => {
    setText(text);
    validate(text);
  };

  const validate = text => {
    if (text) {
      let errorMessage = '';
      switch (type) {
        case 'email':
          if (!validateEmail(text)) {
            errorMessage = 'Invalid email format';
          }
          break;
        case 'phone':
          if (!validatePhone(text)) {
            errorMessage = 'Invalid phone number, must be 11 digits';
          }
          break;
        case 'password':
          if (!validatePassword(text)) {
            errorMessage =
              'Password must be at least 8 characters long and contain uppercase, lowercase, numeric, and special characters';
          }
          break;
        case 'vin':
          if (!validateVin(text)) {
            errorMessage =
              'Invalid VIN format, must be exactly 17 characters long and contain only allowed characters';
          }
          break;
        default:
          break;
      }
      setError(errorMessage);
    } else {
      setError(null);
    }
  };

  return (
    <View style={{flex: 1}}>
      <TextInput
        style={normalText}
        contentStyle={normalText}
        placeholder={placeholder}
        label={label}
        value={text}
        onChangeText={onChangeText}
        onBlur={() => validate(text)}
      />
      <HelperText style={errorText} type="error" visible={error}>
        {error}
      </HelperText>
    </View>
  );
};

export default Input;
