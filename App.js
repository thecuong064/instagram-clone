import React from 'react';
import {Provider} from 'react-redux';
import store, {persistor} from './src/redux/configureStore';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screens from './src/constants/Screens';
import Login from './src/screens/Authentication/Login';
import Registration from './src/screens/Authentication/Registration';
import Main from './src/screens/Main';
import {PersistGate} from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
            <Stack.Screen
              name={Screens.REGISTRATION}
              component={Registration}
            />
            <Stack.Screen name={Screens.MAIN} component={Main} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
