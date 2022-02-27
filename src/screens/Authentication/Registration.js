import React from 'react';

import {StyleSheet, Text, Button, SafeAreaView} from 'react-native';

const Registration = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Registration</Text>
      <Button title="Go back to Login" onPress={() => navigation.goBack()} />
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

export default Registration;
