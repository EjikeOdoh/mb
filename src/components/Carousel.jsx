import {
  View,
  Text,
  FlatList as RNFlatList,
  Animated,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Surface} from 'react-native-paper';

const AnimatedFlatList = Animated.createAnimatedComponent(RNFlatList);

const Item = ({item}) => {
  const {width} = Dimensions.get('window');

  return (
    <Surface style={{width: width - 40, height: 150, backgroundColor: item}}>
      <Text>{item}</Text>
    </Surface>
  );
};

const Carousel = ({data = []}) => {
  const {width} = Dimensions.get('window');
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const onViewRef = useRef(viewableItems => {
    setCurrentIndex(viewableItems.viewableItems[0].index);
  });

  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  useEffect(() => {
    let interval;

    if (data.length > 0) {
      interval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % data.length;
        flatListRef.current.scrollToIndex({index: nextIndex, animated: true});
        setCurrentIndex(nextIndex);
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentIndex, data.length]);

  return (
    <View>
      <AnimatedFlatList
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
          {useNativeDriver: true},
        )}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />
      <View style={styles.indicatorContainer}>
        {data.map((_, index) => {
          const inputRange = [
            (index - 1) * (width - 40),
            index * (width - 40),
            (index + 1) * (width - 40),
          ];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
            extrapolate: 'clamp',
          });
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [1, 1.5, 1],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={index}
              style={[
                styles.indicator,
                {
                  opacity,
                  transform: [{scale}],
                },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: 'row',
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

export default Carousel;
