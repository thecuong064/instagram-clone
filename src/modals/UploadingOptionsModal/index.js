import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import {LocalResources} from '../../constants/LocalResources';
import {Option} from './Option';

const Options = [
  {
    title: 'Post',
    iconSource: LocalResources.Icons.ic_grid,
  },
  {
    title: 'Story',
    iconSource: LocalResources.Icons.ic_story_add,
  },
  {
    title: 'Reel',
    iconSource: LocalResources.Icons.ic_reel,
  },
  {
    title: 'Live',
    iconSource: LocalResources.Icons.ic_live,
  },
];

export const UploadingOptionsModal = ({navigation, routes}) => {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
      <SafeAreaView style={styles.container}>
        <View style={{...styles.bottomModal, ...styles.shadow}}>
          {Options.map(({title, iconSource}) => (
            <Option
              key={title}
              title={title}
              iconSource={iconSource}
              onPress={() => navigation.goBack()}
            />
          ))}
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottomModal: {
    width: 120,
    justifyContent: 'flex-end',
    backgroundColor: '#fafafa',
    borderRadius: 6,
    marginBottom: 42,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});
