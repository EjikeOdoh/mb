import AsyncStorage from '@react-native-async-storage/async-storage';

const storeToken = async value => {
  try {
    await AsyncStorage.setItem('token', value);
  } catch (e) {
    console.log(e);
  }
};

const storeRefreshToken = async value => {
  try {
    await AsyncStorage.setItem('refreshToken', value);
  } catch (e) {
    console.log(e);
  }
};

const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('token');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(e);
  }
};

const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('Logged out');
  } catch (error) {
    console.log(error);
  }
};

export {storeToken, storeRefreshToken, getToken, clearStorage};
