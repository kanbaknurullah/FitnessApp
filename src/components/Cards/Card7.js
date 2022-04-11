import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Card7 = () => {
  return (
    <View style={styles.card}>
      <View style={styles.topleft}>
        <FontAwesome5 name="check" size={40} color="#7fffd4" />
      </View>
      <View style={styles.center}>
        <View
          style={
            ({flex: 1}, {justifyContent: 'center'}, {alignItems: 'center'})
          }>
          <View>
            <Text style={{fontSize: 15}}>It's that simple! Have a</Text>
          </View>
          <View>
            <Text style={styles.text}>great workout!</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomright}>
        <FontAwesome5 name="check" size={40} color="#7fffd4" />
      </View>
    </View>
  );
};

export default Card7;

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
    padding: 8,
  },
  topleft: {
    flex: 1,
    justifyContent: 'flex-start',
    top: 0,
    padding: 8,
    alignSelf: 'flex-start',
  },
  center: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomright: {
    flex: 1,
    justifyContent: 'flex-end',
    bottom: 0,
    padding: 8,
    alignSelf: 'flex-end',
  },
  text: {
    fontSize: 15,
    flexDirection: 'column',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
