import {View, Text, BackHandler} from 'react-native';
import React, {useEffect} from 'react';
import Container from '../../components/Container';
import {useSelector} from 'react-redux';
import {selectCurrentService} from '../../redux/slices/serviceSlice';
import {
  selectAppointmentDate,
  selectAppointmentTime,
} from '../../redux/slices/scheduleSlice';
import {
  colors,
  headerText,
  heading,
  italicText,
  normalText,
  subHeading,
  tinyText,
} from '../../utils/styles';
import Button from '../../components/Button';
import {verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {formatNumber} from '../../utils/formatter';
import {Surface} from 'react-native-paper';

const Row = ({label, value}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Text style={{...headerText, flex: 1}}>{label}</Text>
      <Text
        style={{
          ...subHeading,
          textAlign: 'right',
          flex: 2,
        }}>
        {value}
      </Text>
    </View>
  );
};

const Details = () => {
  const {name, cost} = useSelector(selectCurrentService);
  const appointmentTime = useSelector(selectAppointmentTime);
  const appointmentDate = useSelector(selectAppointmentDate);
  const {navigate, goBack} = useNavigation();

  const flex = {
    gap: verticalScale(5),
    borderWidth: 2,
    borderRadius: verticalScale(7.5),
    borderColor: colors.gray,
    padding: verticalScale(10),
  };

  return (
    <Container>
      <Text style={{...heading, textAlign: 'center'}}>Summary</Text>
      <View style={{marginVertical: verticalScale(20), gap: verticalScale(50)}}>
        <View style={{gap: verticalScale(2)}}>
          <Text style={subHeading}>Service Details</Text>
          <View style={flex}>
            <Row label="Service" value={name} />
            <Row label="Cost" value={formatNumber(cost)} />
          </View>
          <Text style={tinyText}>
            Please note that cost does not cover materials to be used for
            service
          </Text>
        </View>

        <View style={{gap: verticalScale(2)}}>
          <Text style={subHeading}>Appointment Details</Text>
          <View style={flex}>
            <Row label="Time" value={appointmentDate} />
            <Row label="Date" value={appointmentTime} />
          </View>
        </View>
      </View>
      <Button label="Confirm Schedule" onPress={() => navigate('Process')} />
    </Container>
  );
};

export default Details;
