import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Maca from '../components/Cards/Maca';
import Kupa from '../components/Cards/Kupa';
import Sinek from '../components/Cards/Sinek';
import Kare from '../components/Cards/Kare';
import {render} from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

const DATA = [
  {
    id: 1,
    name: 'Maca',
    component: <Maca />,
  },
  {
    id: 2,
    name: 'Sinek',
    component: <Sinek />,
  },
  {
    id: 3,
    name: 'Kare',
    component: <Kare />,
  },
  {
    id: 4,
    name: 'Kupa',
    component: <Kupa />,
  },
  {
    id: 5,
    name: 'Joker1',
    component: <Maca />,
  },
  {
    id: 6,
    name: 'Joker2',
    component: <Maca />,
  },
];

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.container}>
        <View style={styles.top}>
          <View>
            <TouchableOpacity>
              <Ionicons name="ios-settings-outline" size={40} color="grey" />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.sweatDeck}>SWEAT DECK</Text>
          </View>
          <View>
            <View style={styles.rectangle}>
              <View>
                <TouchableOpacity>
                  <Text style={styles.pro}>PRO</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.center}>
          <FlatList
            horizontal={true}
            nestedScrollEnabled={true}
            keyExtractor={item => item.id}
            data={DATA}
            renderItem={() => (
              <View style={styles.center}>
                <Maca />
              </View>
            )}
            //renderItem={({item}) => <Cards cards={item}/>}
          />
        </View>
        <View style={{flex: 15}}>
          <View style={{alignItems: 'center'}}>
            <View style={styles.onay}>
              <TouchableOpacity>
                <FontAwesome5 name="check" size={40} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  safeareaview: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  deneme: {
    backgroundColor: 'green',
  },
  top: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 10,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 75,
  },
  sweatDeck: {
    fontSize: 40,
    color: '#ff7f50',
    fontWeight: 'bold',
  },
  pro: {
    fontSize: 25,
    color: '#dc143c',
  },
  rectangle: {
    borderColor: '#dc143c',
    borderWidth: 2,
    borderRadius: 9,
    justifyContent: 'center',
  },
  onay: {
    borderColor: '#7fffd4',
    backgroundColor: '#7fffd4',
    borderWidth: 20,
    width: 150,
    borderRadius: 9,
    alignItems: 'center',
  },
});
