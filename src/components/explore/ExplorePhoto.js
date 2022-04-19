import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

const ExplorePhoto = props => {
  const {photo, onPress, width, height} = props;
  return (
    <TouchableOpacity
      style={{...styles.photoWrapper, width: width, height: height}}
      onPress={onPress}
      activeOpacity={0.8}>
      <Image
        source={{uri: photo.url}}
        style={{...styles.photo, width: width, height: height}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  photoWrapper: {},
  photo: {
    resizeMode: 'cover',
  },
});

export default ExplorePhoto;
