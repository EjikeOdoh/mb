import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  Animated,
  StyleSheet,
} from 'react-native';
import Container from '../../components/Container';
import {colors, heading, normalText, subHeading} from '../../utils/styles';
import {Surface} from 'react-native-paper';
import ServiceCard from '../../components/ServiceCard';
import {scale} from 'react-native-size-matters';

const data = ['red', 'yellow', 'green'];

const Item = ({item}) => {
  const {width} = Dimensions.get('window');

  return (
    <Surface style={{width: width - 40, height: 150, backgroundColor: item}}>
      <Text>{item}</Text>
    </Surface>
  );
};

const Home = () => {
  const {width} = Dimensions.get('window');
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const onViewRef = useRef(viewableItems => {
    setCurrentIndex(viewableItems.viewableItems[0].index);
  });

  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % data.length;
      flatListRef.current.scrollToIndex({index: nextIndex, animated: true});
      setCurrentIndex(nextIndex);
    }, 3000); // Adjust the time interval as needed

    return () => clearInterval(interval);
  }, [currentIndex]);

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
      </View>

      <View>
        <FlatList
          ref={flatListRef}
          data={data}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={{overflow: 'hidden', width: width - 40}}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewConfigRef.current}
        />
        <View style={styles.indicatorContainer}>
          {data.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                {opacity: index === currentIndex ? 1 : 0.5},
              ]}
            />
          ))}
        </View>
      </View>

      <View style={{flex: 1}}>
        <Text style={subHeading}>Our Services</Text>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            marginVertical: scale(20),
          }}>
          <ServiceCard
            label="Computer Diagnostics"
            icon={require('../../assets/icons/diag.png')}
            color={colors.yellow}
          />
          <ServiceCard
            label="Routine Maintenance"
            icon={require('../../assets/icons/maintenance.png')}
            color={colors.blue}
          />
          <ServiceCard
            label="Electrical Repairs"
            icon={require('../../assets/icons/repair.png')}
            color={colors.orange}
          />
          <ServiceCard
            label="others"
            icon={require('../../assets/icons/others.png')}
            color={colors.violet}
          />
        </View>
      </View>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: 'row',
    bottom: -10,
    alignSelf: 'center',
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'black',
    margin: 5,
  },
});
