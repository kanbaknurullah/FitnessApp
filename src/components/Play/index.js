import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Play = () => {
  return (
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
  );
};

export default Play;

const styles = StyleSheet.create({
  ters: {
    transform: [{rotateX: '180deg'}],
  },
});
