import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from './src/screens/Onboarding';
import MainScreen from './src/screens/MainScreen';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Maca from './src/components/Cards/Maca';
import Card4 from './src/components/Cards/Card4';

const AppStack = createStackNavigator();

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch == null) {
    return null;
  } else if (isFirstLaunch == true) {
    return (
      <NavigationContainer>
        <AppStack.AppStack.Navigator headerMode="none">
          <AppStack.Screen name="Onboarding" component={Onboarding} />
          <AppStack.Screen name="MainScreen" component={MainScreen} />
        </AppStack.AppStack.Navigator>
      </NavigationContainer>
    );
  } else {
    return <MainScreen />;
  }
};

export default App;
