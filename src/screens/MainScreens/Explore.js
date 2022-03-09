import React from 'react';

import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

const Explore = navigation => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Explore Page</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fefefe',
    flex: 1,
  },
});

export default Explore;
