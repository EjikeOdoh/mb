import {View, Text} from 'react-native';
import React from 'react';
import {TimePickerModal} from 'react-native-paper-dates';
import {scale, verticalScale} from 'react-native-size-matters';
import {Button} from 'react-native-paper';
import {tinyText} from '../utils/styles';

const PickTime = ({onSelect, label = 'Pick Time', timeString = 'Time'}) => {
  const [visible, setVisible] = React.useState(false);
  const onDismiss = React.useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onConfirm = React.useCallback(
    ({hours, minutes}) => {
      setVisible(false);
      onSelect({hours, minutes});
    },
    [setVisible],
  );

  const now = new Date();
  now.getHours;

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: verticalScale(10),
      }}>
      <Button
        mode="contained"
        style={{
          alignSelf: 'flex-start',
          paddingHorizontal: scale(20),
        }}
        onPress={() => setVisible(true)}>
        {label}
      </Button>

      <Text style={{...tinyText, fontFamily: 'Montserrat-Bold'}}>
        {timeString}
      </Text>

      <TimePickerModal
        visible={visible}
        onDismiss={onDismiss}
        onConfirm={onConfirm}
        hours={now.getHours()}
        minutes={now.getMinutes()}
        inputFontSize={scale(20)}
        defaultInputType="keyboard"
      />
    </View>
  );
};

export default PickTime;
