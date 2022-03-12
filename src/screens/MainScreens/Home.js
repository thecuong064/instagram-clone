import React from 'react';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import HomeHeader from '../../components/HomeHeader';
import HomeStoriesList from '../../components/HomeStoriesList';

const DATA = [
  {
    id: '1',
    source: 'https://reactjs.org/logo-og.png',
    user: 'user.name',
  },
  {
    id: '2',
    source: 'https://reactjs.org/logo-og.png',
    user: 'user.name',
  },
  {
    id: '3',
    source: 'https://reactjs.org/logo-og.png',
    user: 'user.name',
  },
  {
    id: '4',
    source: 'https://reactjs.org/logo-og.png',
    user: 'user.name',
  },
  {
    id: '5',
    source: 'https://reactjs.org/logo-og.png',
    user: 'user.name',
  },
  {
    id: '6',
    source: 'https://reactjs.org/logo-og.png',
    user: 'user.name',
  },
  {
    id: '11',
    source: 'https://reactjs.org/logo-og.png',
    user: 'user.name',
  },
  {
    id: '12',
    source: 'https://reactjs.org/logo-og.png',
    user: 'user.name',
  },
  {
    id: '13',
    source: 'https://reactjs.org/logo-og.png',
    user: 'user.name',
  },
  {
    id: '14',
    source: 'https://reactjs.org/logo-og.png',
    user: 'user.name',
  },
  {
    id: '15',
    source: 'https://reactjs.org/logo-og.png',
    user: 'user.name',
  },
  {
    id: '16',
    source: 'https://reactjs.org/logo-og.png',
    user: 'user.name',
  },
];

const Home = navigation => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <View style={styles.dividerLine} />
      <HomeStoriesList data={DATA} />
      <View style={styles.dividerLine} />
      <Text>Home Page</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fefefe',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerInsText: {
    width: 110,
    height: 33,
    tintColor: '#000',
  },
  headerMsgButtonWrapper: {
    position: 'absolute',
    right: 10,
  },
  headerMsgButtonImg: {
    tintColor: '#000',
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  dividerLine: {
    height: 1,
    backgroundColor: '#dadada',
  },
});

export default Home;
