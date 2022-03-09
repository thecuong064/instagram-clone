import React from 'react';

import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

const Home = navigation => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Page</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fefefe',
    flex: 1,
  },
});

export default Home;
