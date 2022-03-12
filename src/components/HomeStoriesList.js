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
import LinearGradient from 'react-native-linear-gradient';

const StoryItem = ({source, user}) => (
  <TouchableOpacity style={styles.storyItemWrapper} activeOpacity={0.8}>
    <LinearGradient
      colors={['#CA1D7E', '#E35157', '#F2703F']}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 1.0}}
      style={styles.storyItemImgWrapperWithBorder}>
      <Image style={styles.storyItemImg} source={{uri: source}} />
    </LinearGradient>

    <Text style={styles.storyItemName}>{user}</Text>
  </TouchableOpacity>
);

const HomeStoriesList = ({data}) => {
  const renderItem = ({item}) => (
    <StoryItem source={item.source} user={item.user} />
  );

  return (
    <View style={styles.storiesWrapper}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        horizontal={true}
        renderItem={renderItem}
        contentContainerStyle={styles.storiesFlatList}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  storiesWrapper: {
    height: 100,
    flexDirection: 'row',
  },
  storiesFlatList: {
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  storyItemWrapper: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  storyItemImgWrapperWithBorder: {
    height: 65,
    width: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 65 / 2,
  },
  storyItemImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: '#fff',
    borderWidth: 1.5,
  },
  storyItemName: {
    fontSize: 12,
  },
});

export default HomeStoriesList;
