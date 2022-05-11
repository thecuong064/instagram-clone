import React from 'react';

import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

export const Favorite = navigation => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Favorite Page</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fefefe',
    flex: 1,
  },
});
