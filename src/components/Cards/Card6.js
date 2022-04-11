import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Play from '../Play';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Card6 = () => {
  return (
    <View style={styles.card}>
      <View>
        <View style={({flex: 1}, {justifyContent: 'flex-start'})}>
          <Entypo name="star" size={40} color="#00ffff" />
        </View>
      </View>
      <View
        style={[{flex: 1}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
        <View
          style={[
            {flex: 1},
            {alignItems: 'flex-end'},
            {justifyContent: 'flex-end'},
          ]}>
          <Text style={[styles.text, {color: '#00ffff'}]}>Jog for</Text>
        </View>
        <View style={[{flex: 1}, {alignItems: 'flex-start'}]}>
          <Text style={[styles.text, {color: '#00ffff'}]}>1 minute</Text>
        </View>
      </View>
      <View style={{justifyContent: 'flex-end'}}>
        <View>
          <Entypo name="star" size={40} color="#00ffff" style={styles.ters} />
        </View>
      </View>
    </View>
  );
};

export default Card6;

const styles = StyleSheet.create({
  card: {
    width: '70%',
    height: '50%',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: '0',
      height: '5',
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    flexDirection: 'row',
    padding: 8,
  },
  ters: {
    transform: [{rotateX: '180deg'}],
  },
  deneme: {
    backgroundColor: 'green',
  },
  topleft: {
    flex: 1,
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 0,
    padding: 8,
    alignSelf: 'flex-start',
  },
  center: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomright: {
    flex: 1,
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
    padding: 8,
    alignSelf: 'flex-end',
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});
