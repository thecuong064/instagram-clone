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
import HomeFeed from '../../components/HomeFeed';
import HomeHeader from '../../components/HomeHeader';
import HomeStoriesList from '../../components/HomeStoriesList';

const stories = [
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

const posts = [
  {
    id: '1',
    userAvatar: 'https://reactjs.org/logo-og.png',
    user: 'user.name',
    photo: 'https://reactjs.org/logo-og.png',
  },
  {
    id: '2',
    userAvatar: 'https://reactjs.org/logo-og.png',
    user: 'user.name',
    photo: 'https://reactjs.org/logo-og.png',
  },
  {
    id: '3',
    userAvatar: 'https://reactjs.org/logo-og.png',
    user: 'user.name',
    photo: 'https://reactjs.org/logo-og.png',
  },
  {
    id: '4',
    userAvatar: 'https://reactjs.org/logo-og.png',
    user: 'user.name',
    photo: 'https://reactjs.org/logo-og.png',
  },
  {
    id: '5',
    userAvatar: 'https://reactjs.org/logo-og.png',
    user: 'user.name',
    photo: 'https://reactjs.org/logo-og.png',
  },
  {
    id: '6',
    userAvatar: 'https://reactjs.org/logo-og.png',
    user: 'user.name',
    photo: 'https://reactjs.org/logo-og.png',
  },
  {
    id: '11',
    userAvatar: 'https://reactjs.org/logo-og.png',
    user: 'user.name',
    photo: 'https://reactjs.org/logo-og.png',
  },
  {
    id: '12',
    userAvatar: 'https://reactjs.org/logo-og.png',
    user: 'user.name',
    photo: 'https://reactjs.org/logo-og.png',
  },
  {
    id: '13',
    userAvatar: 'https://reactjs.org/logo-og.png',
    user: 'user.name',
    photo: 'https://reactjs.org/logo-og.png',
  },
  {
    id: '14',
    userAvatar: 'https://reactjs.org/logo-og.png',
    user: 'user.name',
    photo: 'https://reactjs.org/logo-og.png',
  },
  {
    id: '15',
    userAvatar: 'https://reactjs.org/logo-og.png',
    user: 'user.name',
    photo: 'https://reactjs.org/logo-og.png',
  },
  {
    id: '16',
    userAvatar: 'https://reactjs.org/logo-og.png',
    user: 'user.name',
    photo: 'https://reactjs.org/logo-og.png',
  },
];

const Home = navigation => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <View style={styles.dividerLine} />
      <HomeStoriesList data={stories} />
      <View style={styles.dividerLine} />
      <HomeFeed posts={posts} />
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
