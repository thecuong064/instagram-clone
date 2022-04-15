import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screens from './Screens';
import Login from '../screens/Authentication/Login';
import Registration from '../screens/Authentication/Registration';
import MainBottomTab from './MainBottomTab';

const Stack = createNativeStackNavigator();

const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Screens.LOGIN}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
          },
          headerTitleAlign: 'center',
          headerShown: false,
        }}>
        <Stack.Screen name={Screens.LOGIN} component={Login} />
        <Stack.Screen name={Screens.REGISTRATION} component={Registration} />
        <Stack.Screen name={Screens.MAIN} component={MainBottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
