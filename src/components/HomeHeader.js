import React from 'react';

import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.headerInsText}
        resizeMode={'contain'}
        source={require('../assets/instagram_text.png')}
      />
      <TouchableOpacity style={styles.headerMsgButtonWrapper}>
        <Image
          style={styles.headerMsgButtonImg}
          source={require('../assets/ic_message.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
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
});

export default HomeHeader;
