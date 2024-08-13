import {View, Text} from 'react-native';
import React from 'react';
import {IconButton, Modal, Portal} from 'react-native-paper';
import {moderateScale, scale} from 'react-native-size-matters';
import {colors} from '../utils/styles';

const CustomModal = ({visible, hideModal, children}) => {
  return (
    <Portal>
      <Modal
        dismissable={false}
        dismissableBackButton={true}
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={{
          backgroundColor: 'white',
          paddingHorizontal: scale(20),
          paddingVertical: scale(10),
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          borderTopLeftRadius: scale(20),
          borderTopRightRadius: scale(20),
        }}>
        <IconButton
          icon="close"
          onPress={hideModal}
          size={scale(25)}
          style={{
            alignSelf: 'flex-end',
            backgroundColor: colors.gray,
            padding: moderateScale(5),
          }}
        />
        {children}
      </Modal>
    </Portal>
  );
};

export default CustomModal;
