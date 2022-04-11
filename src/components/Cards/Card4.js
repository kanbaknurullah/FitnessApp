import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Play from '../Play';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Card4 = () => {
  return (
    <View style={styles.card}>
      <View style={({flex: 1}, {justifyContent: 'flex-start'})}>
        <View style={({justifyContent: 'center'}, {justifyContent: 'center'})}>
          <Text
            style={[
              styles.text,
              {color: 'red'},
              {fontSize: 35},
              {marginStart: 6},
            ]}>
            10
          </Text>
        </View>
        <View style={({justifyContent: 'center'}, {alignItems: 'center'})}>
          <MaterialCommunityIcons name="cards-diamond" size={40} color="red" />
        </View>
      </View>
      <View
        style={({flex: 1}, {justifyContent: 'center'}, {alignItems: 'center'})}>
        <View
          style={[
            {flex: 1},
            {alignItems: 'flex-end'},
            {justifyContent: 'flex-end'},
          ]}>
          <Text style={[styles.text, {color: 'red'}]}>10</Text>
        </View>
        <View style={[{flex: 1}, {alignItems: 'flex-start'}]}>
          <Text style={[styles.text, {color: 'red'}]}>Push Ups</Text>
        </View>
      </View>
      <View style={({flex: 1}, {justifyContent: 'flex-end'})}>
        <View>
          <MaterialCommunityIcons
            name="cards-diamond"
            size={40}
            color="red"
            style={styles.ters}
          />
        </View>
        <View style={({justifyContent: 'center'}, {alignItems: 'center'})}>
          <Text
            style={[
              styles.text,
              {transform: [{rotate: '180deg'}]},
              {color: 'red'},
              {fontSize: 35},
              {marginEnd: 6},
            ]}>
            10
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Card4;

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
