import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Kare from './src/components/Cards/Kare';
import Kupa from './src/components/Cards/Kupa';
import Maca from './src/components/Cards/Maca';
import Sinek from './src/components/Cards/Sinek';
import Card1 from './src/components/Cards/Card1';
import Card2 from './src/components/Cards/Card2';
import Card3 from './src/components/Cards/Card3';
import Card4 from './src/components/Cards/Card4';
import Card5 from './src/components/Cards/Card5';
import Card6 from './src/components/Cards/Card6';
import Card7 from './src/components/Cards/Card7';

const App = () => {
  return (
    <View style={[styles.pageContainer]}>
      <Card7 />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
