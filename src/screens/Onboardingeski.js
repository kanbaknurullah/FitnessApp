import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/1.png')} />,
          title: 'Onboarding 1',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/2.png')} />,
          title: 'Onboarding 2',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/3.png')} />,
          title: 'Onboarding 3',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/4.png')} />,
          title: 'Onboarding 4',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/5.png')} />,
          title: 'Onboarding 5',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/6.png')} />,
          title: 'Onboarding 6',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/7.png')} />,
          title: 'Onboarding 7',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
};
export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
