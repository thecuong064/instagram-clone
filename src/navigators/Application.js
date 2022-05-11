import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screens from './Screens';
import {Login, Registration} from '../screens/Authentication';
import MainBottomTab from './MainBottomTab';
import {UploadingOptionsModal} from '../modals/UploadingOptionsModal';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const Stack = createNativeStackNavigator();

const ApplicationNavigator = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
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
            <Stack.Screen name={Screens.MAIN} component={MainBottomTab} />
            <Stack.Screen
              name={'UploadingOptionsModal'}
              component={UploadingOptionsModal}
              options={{presentation: 'transparentModal'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default ApplicationNavigator;
