import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Maca = () => {
  return (
    <View style={styles.center}>
      <View style={styles.card}>
        <View style={styles.topleft}>
          <MaterialCommunityIcons name="cards-spade" size={40} color="black" />
        </View>
        <View style={styles.center}>
          <Text style={[styles.text, {color: 'black'}]}>CRUNCHES</Text>
        </View>
        <View style={styles.bottomright}>
          <MaterialCommunityIcons
            name="cards-spade"
            size={40}
            color="black"
            style={styles.ters}
          />
        </View>
        <View>
          <TouchableOpacity>
            <AntDesign
              name="playcircleo"
              size={40}
              color="black"
              style={styles.ters}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Maca;

const styles = StyleSheet.create({
  card: {
    width: (windowWidth * 3) / 4,
    height: windowHeight / 2,
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
    padding: 8,
    margin: 20,
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
    fontSize: 25,
    fontWeight: 'bold',
  },
});
