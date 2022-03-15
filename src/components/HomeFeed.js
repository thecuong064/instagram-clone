/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
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

const MAX_SHORT_DESC_LENGTH_LIMIT = 80;

const FeedPost = ({post}) => {
  const {id, userAvatar, user, photo} = post;
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isDescMoreVisible, setIsDescMoreVisible] = useState(true);

  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged";
  return (
    <View style={styles.feedPostWrapper}>
      <View
        style={{
          ...styles.feedPostContentRowWrapper,
          marginVertical: 10,
        }}>
        <Image style={styles.feedPostUserAvatar} source={{uri: userAvatar}} />
        <Text style={styles.feedPostUsername}>{user}</Text>
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 0,
            marginRight: 10,
          }}>
          <Image
            style={{
              height: 20,
              width: 20,
            }}
            source={require('../assets/ic_post_more.png')}
          />
        </TouchableOpacity>
      </View>

      <Image style={styles.feedPostImg} source={{uri: photo}} />

      <View
        style={{
          ...styles.feedPostContentRowWrapper,
          marginVertical: 10,
        }}>
        <TouchableOpacity
          style={styles.feedPostButtonWrapper}
          onPress={() => setIsLiked(!isLiked)}>
          <Image
            style={styles.feedPostButton}
            source={
              isLiked
                ? require('../assets/ic_post_like_selected.png')
                : require('../assets/ic_post_like.png')
            }
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.feedPostButtonWrapper}>
          <Image
            style={styles.feedPostButton}
            source={require('../assets/ic_post_comment.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.feedPostButtonWrapper}>
          <Image
            style={styles.feedPostButton}
            source={require('../assets/ic_post_direct.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.feedPostButtonWrapper,
            position: 'absolute',
            right: 0,
          }}
          onPress={() => setIsSaved(!isSaved)}>
          <Image
            style={styles.feedPostButton}
            source={
              isSaved
                ? require('../assets/ic_post_save_selected.png')
                : require('../assets/ic_post_save.png')
            }
          />
        </TouchableOpacity>
      </View>
      <View style={{...styles.feedPostContentRowWrapper, marginBottom: 5}}>
        <Text style={styles.feedPostLikeText}>999 likes</Text>
      </View>
      <View style={{...styles.feedPostContentRowWrapper, marginBottom: 5}}>
        <Text style={{...styles.feedPostDescription, fontWeight: '700'}}>
          {user}{' '}
          {description.length > MAX_SHORT_DESC_LENGTH_LIMIT ? (
            isDescMoreVisible ? (
              <Text style={styles.feedPostDescription}>
                {`${description.slice(0, MAX_SHORT_DESC_LENGTH_LIMIT)}`}
                <Text
                  onPress={() => setIsDescMoreVisible(false)}
                  style={styles.feedPostDescriptionMore}>
                  {' '}
                  ...more
                </Text>
              </Text>
            ) : (
              <Text style={styles.feedPostDescription}>
                {description}
                <Text
                  onPress={() => setIsDescMoreVisible(true)}
                  style={styles.feedPostDescriptionMore}>
                  {'\n'}
                  Show less
                </Text>
              </Text>
            )
          ) : (
            <Text style={styles.feedPostDescription}>{description}</Text>
          )}
        </Text>
      </View>
      <View style={styles.feedPostContentRowWrapper}>
        <Text style={styles.feedPostTimestamp}>99 days ago</Text>
      </View>
    </View>
  );
};

const HomeFeed = ({posts}) => {
  const renderItem = ({item}) => <FeedPost post={item} />;

  return (
    <View style={styles.feedWrapper}>
      <FlatList
        data={posts}
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
  feedPostButtonWrapper: {
    marginRight: 20,
  },
  feedPostButton: {
    width: 25,
    height: 25,
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
  feedPostDescriptionMore: {
    fontWeight: '400',
    color: '#8e8e8e',
    fontSize: 14,
  },
  feedPostTimestamp: {
    fontSize: 10,
  },
});

export default HomeFeed;
