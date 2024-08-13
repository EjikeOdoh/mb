import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {IconButton, Modal, Portal} from 'react-native-paper';
import Button from './Button';
import {colors, normalText, subHeading} from '../utils/styles';
import {scale, verticalScale} from 'react-native-size-matters';

const ImageButton = ({img, onPress}) => {
  const {width} = Dimensions.get('window');
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: width / 2.5,
        height: scale(100),
        borderRadius: scale(10),
        overflow: 'hidden',
      }}>
      <Image
        source={img}
        style={{height: '100%', width: '100%'}}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

const Gallery = ({data = []}) => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);

  const showModal = index => {
    setSelected(data[index]);
    setVisible(true);
  };

  const hideModal = () => setVisible(false);

  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  };

  return (
    <View style={{marginVertical: verticalScale(20)}}>
      <Text style={subHeading}>Gallery</Text>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          gap: scale(20),
          marginVertical: verticalScale(10),
          paddingVertical: verticalScale(20),
          borderRadius: verticalScale(10),
          backgroundColor: colors.gray,
        }}>
        {data.map((x, index) => (
          <ImageButton
            key={index}
            img={{uri: x.url}}
            onPress={() => showModal(index)}
          />
        ))}
      </View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          style={{flex: 1}}
          contentContainerStyle={containerStyle}>
          <IconButton
            onPress={hideModal}
            icon="close"
            size={scale(25)}
            style={{alignSelf: 'flex-end', top: verticalScale(-20)}}
          />
          <Image
            source={{uri: selected?.url}}
            style={{height: '75%', width: '75%'}}
            resizeMode="cover"
          />
          <Text style={normalText}>{selected?.caption}</Text>
        </Modal>
      </Portal>
    </View>
  );
};

export default Gallery;
