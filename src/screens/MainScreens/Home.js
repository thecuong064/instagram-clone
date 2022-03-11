import React from 'react';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.headerInsText}
        resizeMode={'contain'}
        source={require('../../assets/instagram_text.png')}
      />
      <TouchableOpacity style={styles.headerMsgButtonWrapper}>
        <Image
          style={styles.headerMsgButtonImg}
          source={require('../../assets/ic_message.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
const Home = navigation => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
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
