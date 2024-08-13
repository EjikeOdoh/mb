import {View, Text} from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import {heading} from '../../utils/styles';

const ChatScreen = () => {
  return (
    <Container>
      <Text style={{...heading, textAlign: 'center'}}>Chat</Text>
    </Container>
  );
};

export default ChatScreen;
