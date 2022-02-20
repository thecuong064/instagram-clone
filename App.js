import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/configureStore';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screens from './src/constants/Screens';
import Login from './src/screens/Authentication/Login';
import Registration from './src/screens/Authentication/Registration';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
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
          }}>
          <Stack.Screen name={Screens.LOGIN} component={Login} />
          <Stack.Screen name={Screens.REGISTRATION} component={Registration} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
