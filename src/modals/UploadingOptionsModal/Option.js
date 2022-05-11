import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

export const Option = props => {
  const {onPress, title, iconSource} = props;
  return (
    <React.Fragment>
      <TouchableOpacity style={styles.wrapper} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
        <Image style={styles.icon} source={iconSource} />
      </TouchableOpacity>
      <View style={styles.divider} />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: '#eaeaea',
  },
  wrapper: {
    flexDirection: 'row',
    padding: 10,
  },
  title: {
    flex: 1,
    color: '#000',
    fontSize: 16,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#000',
  },
});
