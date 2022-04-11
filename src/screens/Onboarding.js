import React from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import Swiper from 'react-native-swiper';
import Card1 from '../components/Cards/Card1';
import Card2 from '../components/Cards/Card2';
import Card3 from '../components/Cards/Card3';
import Card4 from '../components/Cards/Card4';
import Card5 from '../components/Cards/Card5';
import Card6 from '../components/Cards/Card6';
import Card7 from '../components/Cards/Card7';

const Onboarding = ({navigation}) => {
  return (
    <Swiper style={styles.wrapper}>
      <View style={styles.slide1}>
        <Card1 />
      </View>
      <View style={styles.slide2}>
        <Card2 />
      </View>
      <View style={styles.slide3}>
        <Card3 />
      </View>
      <View style={styles.slide3}>
        <Card4 />
      </View>
      <View style={styles.slide3}>
        <Card5 />
      </View>
      <View style={styles.slide3}>
        <Card6 />
      </View>
      <View style={styles.slide3}>
        <Card7 />
      </View>
    </Swiper>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
