import React from 'react';

import {StyleSheet, Text, SafeAreaView} from 'react-native';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Login</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#E8EAED',
    flex: 1,
    justifyContent: 'center',
  },
});

export default Login;
