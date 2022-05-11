import React from 'react';

import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {LocalResources} from '../../constants/LocalResources';

export const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.headerInsText}
        resizeMode={'contain'}
        source={LocalResources.Images.instagram_text}
      />
      <TouchableOpacity style={styles.headerMsgButtonWrapper}>
        <Image
          style={styles.headerMsgButtonImg}
          source={LocalResources.Icons.ic_message}
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
