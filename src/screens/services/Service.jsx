import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  BackHandler,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Container from '../../components/Container';
import {normalText, subHeading, tinyText} from '../../utils/styles';

import Button from '../../components/Button';
import DatePicker from 'react-native-date-picker';
import Gallery from '../../components/Gallery';
import {verticalScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {selectCurrentService} from '../../redux/slices/serviceSlice';
import CustomModal from '../../components/CustomModal';
import PickDate from '../../components/PickDate';
import PickTime from '../../components/PickTime';
import {formatDateTime, formatNumber, formatTime} from '../../utils/formatter';
import {
  setAppointmentDate,
  setAppointmentTime,
} from '../../redux/slices/scheduleSlice';
import {useNavigation} from '@react-navigation/native';
import {HelperText} from 'react-native-paper';
import {selectUser} from '../../redux/slices/userSlice';
import {selectAddress} from '../../redux/slices/addressSlice';
import {selectVehicle} from '../../redux/slices/vehicleSlice';

const Service = () => {
  const user = useSelector(selectUser);
  const address = useSelector(selectAddress);
  const vehicle = useSelector(selectVehicle);
  const service = useSelector(selectCurrentService);
  const dispatch = useDispatch();
  const {navigate, goBack} = useNavigation();

  console.log(address);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setDate(null);
    setTime(null);
    setIsModalOpen(false);
  };

  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const pickTime = x => {
    setTime(x);
    dispatch(setAppointmentTime(formatTime(x.hours, x.minutes)));
  };

  const pickDate = x => {
    setDate(x);
    dispatch(setAppointmentDate(formatDateTime(x)));
  };

  const goToDetails = () => {
    setIsModalOpen(false);
    navigate('Details');
    setTime(null);
    setDate(null);
  };

  const flex = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  return (
    <Container>
      <View style={{marginVertical: verticalScale(20)}}>
        <Text style={subHeading}>{service.name}</Text>
        <Text style={normalText}>{service.desc}</Text>
        <View style={{marginVertical: verticalScale(10)}}>
          <Text style={normalText}>
            Cost: <Text style={subHeading}>{formatNumber(service.cost)}</Text>
          </Text>
        </View>
      </View>
      <Button
        label="Book Now"
        onPress={openModal}
        // disabled={!(address && vehicle)}
      />

      {!(address && vehicle) && (
        <Pressable onPress={() => navigate('Profile')}>
          <HelperText type="error" style={tinyText}>
            Please add vehicle details and address to be able to complete this
            process.
          </HelperText>
        </Pressable>
      )}
      <Gallery data={service.images} />

      <CustomModal visible={isModalOpen} hideModal={closeModal}>
        <View style={{marginVertical: verticalScale(10)}}>
          <Text style={subHeading}>Schedule Time</Text>
          <Text style={{...tinyText, fontFamily: 'Montserrat-Regular'}}>
            Pick a date and time most suitable for you
          </Text>
        </View>

        <View
          style={{gap: verticalScale(10), marginVertical: verticalScale(20)}}>
          <View style={flex}>
            <PickDate
              onSelect={pickDate}
              label={date ? 'Change Date' : 'Pick Date'}
              dateString={date ? formatDateTime(date) : 'Date'}
            />
          </View>
          <View style={flex}>
            <PickTime
              onSelect={pickTime}
              label={time ? 'Change Time' : 'Pick Time'}
              timeString={time ? formatTime(time.hours, time.minutes) : 'Time'}
            />
          </View>
        </View>

        <Button
          label="Continue"
          onPress={goToDetails}
          disabled={!(time && date)}
        />
      </CustomModal>
    </Container>
  );
};

export default Service;
