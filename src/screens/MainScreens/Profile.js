import React from 'react';

import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

const Profile = navigation => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile Page</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fefefe',
    flex: 1,
  },
});

export default Profile;
