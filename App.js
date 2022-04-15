import React from 'react';
import Toast from 'react-native-toast-message';
import {toastConfig} from './src/utils/ToastUtils';
import {Provider} from 'react-redux';
import store, {persistor} from './src/redux/configureStore';

import {PersistGate} from 'redux-persist/integration/react';
import ApplicationNavigator from './src/navigators/Application';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApplicationNavigator />
      </PersistGate>
      <Toast config={toastConfig} bottomOffset={60} />
    </Provider>
  );
};

export default App;
