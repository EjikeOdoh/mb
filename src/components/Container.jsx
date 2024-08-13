import {
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import React from 'react';
import {colors} from '../utils/styles';

const Container = ({children}) => {
  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={{flexGrow: 1}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1, paddingHorizontal: 16}}>
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Container;
