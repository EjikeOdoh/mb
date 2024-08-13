import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {configureFonts, DefaultTheme, PaperProvider} from 'react-native-paper';
import SignUp from './src/screens/auth/SignUp';
import SignIn from './src/screens/auth/SignIn';
import Home from './src/screens/home/Home';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Service from './src/screens/services/Service';
import Profile from './src/screens/home/Profile';
import Settings from './src/screens/settings/Settings';
import Navigation from './src/Navigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {en, registerTranslation} from 'react-native-paper-dates';

registerTranslation('en', en);
const App = () => {
  const theme = {
    ...DefaultTheme,
    fonts: configureFonts({
      config: {
        fontFamily: 'Montserrat-Regular',
      },
    }),
    colors: {
      primary: 'rgb(0, 86, 209)',
      onPrimary: 'rgb(255, 255, 255)',
      primaryContainer: 'rgb(218, 226, 255)',
      onPrimaryContainer: 'rgb(0, 24, 71)',
      secondary: 'rgb(88, 94, 113)',
      onSecondary: 'rgb(255, 255, 255)',
      secondaryContainer: 'rgb(220, 226, 249)',
      onSecondaryContainer: 'rgb(21, 27, 44)',
      tertiary: 'rgb(0, 108, 78)',
      onTertiary: 'rgb(255, 255, 255)',
      tertiaryContainer: 'rgb(73, 254, 193)',
      onTertiaryContainer: 'rgb(0, 33, 21)',
      error: 'rgb(186, 26, 26)',
      onError: 'rgb(255, 255, 255)',
      errorContainer: 'rgb(255, 218, 214)',
      onErrorContainer: 'rgb(65, 0, 2)',
      background: 'rgb(254, 251, 255)',
      onBackground: 'rgb(27, 27, 31)',
      surface: 'rgb(254, 251, 255)',
      onSurface: 'rgb(27, 27, 31)',
      surfaceVariant: 'rgb(225, 226, 236)',
      onSurfaceVariant: 'rgb(69, 70, 79)',
      outline: 'rgb(117, 119, 128)',
      outlineVariant: 'rgb(197, 198, 208)',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: 'rgb(48, 48, 52)',
      inverseOnSurface: 'rgb(242, 240, 244)',
      inversePrimary: 'rgb(178, 197, 255)',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(241, 243, 253)',
        level2: 'rgb(234, 238, 251)',
        level3: 'rgb(226, 233, 250)',
        level4: 'rgb(224, 231, 250)',
        level5: 'rgb(218, 228, 249)',
      },
      surfaceDisabled: 'rgba(27, 27, 31, 0.12)',
      onSurfaceDisabled: 'rgba(27, 27, 31, 0.38)',
      backdrop: 'rgba(46, 48, 56, 0.4)',
      custom0: 'rgb(0, 86, 209)',
      onCustom0: 'rgb(255, 255, 255)',
      custom0Container: 'rgb(218, 226, 255)',
      onCustom0Container: 'rgb(0, 24, 71)',
    },
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <NavigationContainer>
          <PaperProvider theme={theme}>
            <Navigation />
          </PaperProvider>
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
