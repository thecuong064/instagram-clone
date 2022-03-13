/* eslint-disable react-native/no-inline-styles */
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
import {SCREEN_WIDTH} from '../utils/DeviceUtils';

const FeedPost = ({source, user}) => (
  <View style={styles.feedPostWrapper}>
    <View
      style={{
        ...styles.feedPostContentRowWrapper,
        marginVertical: 10,
      }}>
      <Image style={styles.feedPostUserAvatar} source={{uri: source}} />
      <Text style={styles.feedPostUsername}>{user}</Text>
      <Image
        style={{
          ...styles.feedPostButton,
          position: 'absolute',
          right: 0,
          marginRight: 10,
        }}
        source={require('../assets/ic_post_more.png')}
      />
    </View>

    <Image style={styles.feedPostImg} source={{uri: source}} />

    <View
      style={{
        ...styles.feedPostContentRowWrapper,
        marginVertical: 10,
      }}>
      <Image
        style={styles.feedPostButton}
        source={require('../assets/ic_post_like.png')}
      />
      <Image
        style={styles.feedPostButton}
        source={require('../assets/ic_post_comment.png')}
      />
      <Image
        style={styles.feedPostButton}
        source={require('../assets/ic_post_direct.png')}
      />
      <Image
        style={{...styles.feedPostButton, position: 'absolute', right: 0}}
        source={require('../assets/ic_post_bookmark.png')}
      />
    </View>
    <View style={{...styles.feedPostContentRowWrapper, marginBottom: 5}}>
      <Text style={styles.feedPostLikeText}>999 likes</Text>
    </View>
    <View style={{...styles.feedPostContentRowWrapper, marginBottom: 5}}>
      <Text style={{...styles.feedPostDescription, fontWeight: '700'}}>
        {user}{' '}
        <Text style={styles.feedPostDescription}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </Text>
      </Text>
    </View>
    <View style={styles.feedPostContentRowWrapper}>
      <Text style={styles.feedPostTimestamp}>99 days ago</Text>
    </View>
  </View>
);

const HomeFeed = ({data}) => {
  const renderItem = ({item}) => (
    <FeedPost source={item.source} user={item.user} />
  );

  return (
    <View style={styles.feedWrapper}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        horizontal={false}
        renderItem={renderItem}
        contentContainerStyle={styles.feedFlatList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  feedWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fafafa',
  },
  feedFlatList: {
    alignPosts: 'center',
  },
  feedPostWrapper: {
    marginBottom: 10,
  },
  feedPostImg: {
    width: SCREEN_WIDTH,
    height: (SCREEN_WIDTH / 4) * 5,
  },
  feedPostContentRowWrapper: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  feedPostUserAvatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
  },
  feedPostUsername: {
    fontWeight: '700',
    color: '#000',
    fontSize: 14,
    marginLeft: 10,
  },
  feedPostButton: {
    width: 25,
    height: 25,
    marginRight: 20,
  },
  feedPostLikeText: {
    fontWeight: '700',
    color: '#000',
    fontSize: 14,
  },
  feedPostDescription: {
    fontWeight: '400',
    color: '#000',
    fontSize: 14,
  },
  feedPostTimestamp: {
    fontSize: 10,
  },
});

export default HomeFeed;
