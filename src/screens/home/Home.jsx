import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Container from '../../components/Container';
import {colors, heading, normalText, subHeading} from '../../utils/styles';
import {Surface} from 'react-native-paper';
import ServiceCard from '../../components/ServiceCard';
import {scale, verticalScale} from 'react-native-size-matters';
import Carousel from '../../components/Carousel';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {
  selectCurrentService,
  selectServices,
  setSelectedService,
  setServices,
} from '../../redux/slices/serviceSlice';
import api from '../../utils/api';

const Home = () => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const services = useSelector(selectServices);

  const goToService = id => {
    dispatch(setSelectedService(id));
    navigate('Service');
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const {data} = await api.get('/services');
        dispatch(setServices(data));
      } catch (error) {
        console.log({...error});
      }
    };

    fetchServices();
  }, []);

  return (
    <Container>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 40,
        }}>
        <View>
          <Text style={subHeading}>
            Welcome, <Text style={heading}>Ejike</Text>
          </Text>
          <Text style={normalText}>How can we help today?</Text>
        </View>

        <TouchableOpacity onPress={() => navigate('Profile')}>
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
              alignSelf: 'center',
              overflow: 'hidden',
            }}>
            <Text style={{...heading, color: 'white'}}>JE</Text>
          </Surface>
        </TouchableOpacity>
      </View>

      <Carousel data={['tomato', 'pink', 'green', 'blue']} />

      <View style={{flex: 1}}>
        <Text style={subHeading}>Our Services</Text>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            gap: scale(30),
            marginVertical: verticalScale(10),
            paddingVertical: verticalScale(10),
          }}>
          {services.map(service => (
            <ServiceCard
              key={service.id}
              label={service.name}
              icon={service.icon}
              onPress={() => goToService(service.id)}
              color={colors.black}
            />
          ))}

          <ServiceCard
            label="others"
            icon={require('../../assets/icons/others.png')}
            color={colors.violet}
          />
          {services.length % 2 === 0 && <View style={{width: scale(140)}} />}
        </View>
      </View>
    </Container>
  );
};

export default Home;
