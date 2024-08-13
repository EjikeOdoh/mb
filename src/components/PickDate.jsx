import {View, Text} from 'react-native';
import React, {useState, useCallback} from 'react';
import {DatePickerModal} from 'react-native-paper-dates';
import {Button} from 'react-native-paper';
import {colors, normalText, tinyText} from '../utils/styles';
import {scale, verticalScale} from 'react-native-size-matters';

const PickDate = ({onSelect, label = 'Pick Date', dateString = 'Date'}) => {
  const [date, setDate] = useState(undefined);
  const [open, setOpen] = useState(false);

  const onDismissSingle = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = useCallback(
    params => {
      if (params) {
        setOpen(false);
        onSelect(params.date);
        setDate(params.date);
      }
    },
    [setOpen, setDate],
  );

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: verticalScale(5),
      }}>
      <Button
        mode="contained"
        style={{
          alignSelf: 'flex-start',
          borderColor: colors.primary,
          paddingHorizontal: scale(20),
        }}
        onPress={() => setOpen(true)}>
        {label}
      </Button>
      <Text style={{...tinyText, fontFamily: 'Montserrat-Bold'}}>
        {dateString}
      </Text>
      <DatePickerModal
        locale="en"
        mode="single"
        visible={open}
        onDismiss={onDismissSingle}
        date={date}
        onConfirm={onConfirmSingle}
      />
    </View>
  );
};

export default PickDate;
