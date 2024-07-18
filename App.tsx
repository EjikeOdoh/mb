import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PaperProvider} from 'react-native-paper';
import SignUp from './src/screens/auth/SignUp';
import SignIn from './src/screens/auth/SignIn';
import Home from './src/screens/home/Home';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <PaperProvider>
        <ScrollView>
          <SignUp />
          <SignIn />
          <Home />
        </ScrollView>
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
