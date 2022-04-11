import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Play from '../Play';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Card3 = () => {
  return (
    <View style={styles.card}>
      <View style={{flex: 1}}>
        <View>
          <Text
            style={[
              styles.text,
              {color: 'black'},
              {fontSize: 35},
              {paddingLeft: 11},
            ]}>
            7
          </Text>
        </View>
        <View>
          <MaterialCommunityIcons name="cards-spade" size={40} color="black" />
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
          <Text style={[styles.text, {color: 'black'}]}>7</Text>
        </View>
        <View style={[{flex: 1}, {alignItems: 'flex-start'}]}>
          <Text style={[styles.text, {color: 'black'}]}>Crunches</Text>
        </View>
      </View>
      <View style={({flex: 1}, {justifyContent: 'flex-end'})}>
        <View>
          <MaterialCommunityIcons
            name="cards-spade"
            size={40}
            color="black"
            style={styles.ters}
          />
        </View>
        <View>
          <Text
            style={[
              styles.text,
              {transform: [{rotate: '180deg'}]},
              {color: 'black'},
              {fontSize: 35},
              {marginEnd: 11},
            ]}>
            7
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Card3;

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
