import React from 'react';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import {View, Text, Image} from 'react-native';

export const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={{borderLeftColor: 'pink', backgroundColor: 'green'}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontSize: 15,
        fontWeight: '100',
      }}
    />
  ),
  error: ({props}) => (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        width: '95%',
        backgroundColor: '#fe3250',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 6,
      }}>
      <Image
        style={{width: 20, height: 20, marginRight: 8, tintColor: '#fff'}}
        source={props.iconSource}
      />
      <Text
        style={{
          color: '#fff',
          fontSize: 16,
          fontWeight: '400',
        }}>
        {props.content}
      </Text>
    </View>
  ),
};

export const ToastTypes = {
  SUCCESS: 'success',
  ERROR: 'error',
};

export const ToastUtils = {
  showErrorToast: ({message, duration = 800}) => {
    Toast.show({
      position: 'bottom',
      type: ToastTypes.ERROR,
      props: {
        content: message,
        iconSource: require('../assets/ic_warning.png'),
      },
      visibilityTime: duration,
    });
  },
};
