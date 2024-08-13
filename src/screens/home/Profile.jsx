import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import React, {useState} from 'react';
import Container from '../../components/Container';
import {IconButton, Surface} from 'react-native-paper';
import {
  colors,
  heading,
  normalText,
  subHeading,
  tinyText,
} from '../../utils/styles';
import {scale, verticalScale} from 'react-native-size-matters';
import CustomModal from '../../components/CustomModal';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {useSelector, useDispatch} from 'react-redux';
import {selectAddress, setAddress} from '../../redux/slices/addressSlice';
import {selectVehicle, setVehicle} from '../../redux/slices/vehicleSlice';

const Row = ({label, value}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: verticalScale(5),
      }}>
      <Text style={normalText}>{label}</Text>
      <Text style={normalText}>{value}</Text>
    </View>
  );
};

const Profile = () => {
  const address = useSelector(selectAddress);
  const vehicle = useSelector(selectVehicle);

  console.log(address);

  const dispatch = useDispatch();

  const [addressModal, setAddressModal] = useState(false);
  const showAddressModal = () => setAddressModal(true);
  const hideAddressModal = () => {
    if (!address) {
      setAddressInfo('');
    }
    setAddressModal(false);
  };

  const [addressInfo, setAddressInfo] = useState('');

  const [vehicleModal, setVehicleModal] = useState(false);
  const showVehicleModal = () => setVehicleModal(true);
  const hideVehicleModal = () => {
    if (!vehicle) {
      setVehicleInfo({brand: '', model: '', vin: ''});
    }
    setVehicleModal(false);
  };

  const [vehicleInfo, setVehicleInfo] = useState({
    brand: vehicle?.brand | '',
    model: vehicle?.model | '',
    vin: vehicle?.vin | '',
  });

  const submitAddressInfo = () => {
    dispatch(setAddress(addressInfo));
    hideAddressModal();
  };
  const submitVehicleInfo = () => {
    dispatch(setVehicle(vehicleInfo));
    hideVehicleModal();
  };

  return (
    <Container>
      <View
        style={{
          alignItems: 'center',
          gap: scale(10),
          marginVertical: verticalScale(20),
        }}>
        <Surface
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
            borderWidth: 3,
            borderColor: 'white',
            backgroundColor: colors.black,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}>
          <Text style={{...heading, color: 'white'}}>JE</Text>
        </Surface>
        <View>
          <Text style={subHeading}>Ejike Jude</Text>
          <Text style={normalText}>08130719451</Text>
        </View>
      </View>

      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: verticalScale(7.5),
          }}>
          <Text style={subHeading}>Address</Text>
          <IconButton icon="pencil" onPress={showAddressModal} />
        </View>
        {address ? (
          <Text style={normalText}>{address}</Text>
        ) : (
          <Text style={tinyText}>Please add your address</Text>
        )}
      </View>

      <View style={{marginVertical: verticalScale(20)}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: verticalScale(7.5),
          }}>
          <Text style={subHeading}>Vehicle Information</Text>
          <IconButton icon="pencil" onPress={showVehicleModal} />
        </View>

        {vehicle ? (
          <View>
            <Row label="Brand" value={vehicle?.brand} />
            <Row label="Model" value={vehicle?.model} />
            <Row label="VIN" value={vehicle?.vin} />
          </View>
        ) : (
          <Text style={tinyText}>Please add your vehicle information</Text>
        )}
      </View>

      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: verticalScale(7.5),
          }}>
          <Text style={subHeading}>Orders</Text>
          <TouchableOpacity onPress={() => console.log('Hi')} style={{}}>
            <Text style={normalText}>See All</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Add Address Modal: Start */}
      <CustomModal visible={addressModal} hideModal={hideAddressModal}>
        <View
          style={{
            marginTop: verticalScale(20),
            marginBottom: verticalScale(50),
            gap: verticalScale(10),
          }}>
          <TextInput
            label="Address"
            placeholder="e.g Shoprite, Airport Road, Lugbe"
            value={addressInfo}
            onChangeText={text => setAddressInfo(text)}
            multiline
            numberOfLines={3}
          />
        </View>
        <Button
          label={address ? 'Update Address' : 'Add Address'}
          onPress={submitAddressInfo}
        />
      </CustomModal>
      {/* Add Address Modal: End */}

      {/* Add vehicle Modal:Start */}
      <CustomModal visible={vehicleModal} hideModal={hideVehicleModal}>
        <View
          style={{
            marginTop: verticalScale(20),
            marginBottom: verticalScale(50),
            gap: verticalScale(10),
          }}>
          <TextInput
            label="Brand"
            placeholder="e.g Mercedes Benz"
            value={vehicleInfo.brand}
            onChangeText={text => setVehicleInfo({...vehicleInfo, brand: text})}
          />
          <TextInput
            label="Model"
            placeholder="e.g ML350"
            value={vehicleInfo.model}
            onChangeText={text => setVehicleInfo({...vehicleInfo, model: text})}
          />
          <TextInput
            label="VIN"
            placeholder="4JBABCEEF123456"
            value={vehicleInfo.vin}
            onChangeText={text => setVehicleInfo({...vehicleInfo, vin: text})}
          />
        </View>
        <Button
          label={vehicle ? 'Update Vehicle' : 'Add Vehicle'}
          disabled={
            !(vehicleInfo.brand && vehicleInfo.model && vehicleInfo.vin)
          }
          onPress={submitVehicleInfo}
        />
      </CustomModal>

      {/* Add vehicle Moda:End */}
    </Container>
  );
};

export default Profile;
