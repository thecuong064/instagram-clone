/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef, forwardRef} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {SCREEN_WIDTH} from '../../utils/DeviceUtils';
import ScalableImage from 'react-native-scalable-image';
import FlatListLoadMore from '../general/FlatListLoadMore';
import {LocalResources} from '../../constants/LocalResources';
import {MoreBottomSheet} from './MoreBottomSheet';

const MAX_SHORT_DESC_LENGTH_LIMIT = 80;

const FeedPost = ({post, onMorePress}) => {
  const {id, username, userPhoto, photo} = post;
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
        <Image style={styles.feedPostUserAvatar} source={{uri: userPhoto}} />
        <Text style={styles.feedPostUsername}>{username}</Text>
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 0,
            marginRight: 10,
          }}
          onPress={onMorePress}>
          <Image
            style={{
              height: 20,
              width: 20,
            }}
            source={LocalResources.Icons.ic_post_more}
          />
        </TouchableOpacity>
      </View>

      <ScalableImage width={SCREEN_WIDTH} source={{uri: photo}} />

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
                ? LocalResources.Icons.ic_post_like_selected
                : LocalResources.Icons.ic_post_like
            }
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.feedPostButtonWrapper}>
          <Image
            style={styles.feedPostButton}
            source={LocalResources.Icons.ic_post_comment}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.feedPostButtonWrapper}>
          <Image
            style={styles.feedPostButton}
            source={LocalResources.Icons.ic_post_direct}
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
                ? LocalResources.Icons.ic_post_save_selected
                : LocalResources.Icons.ic_post_save
            }
          />
        </TouchableOpacity>
      </View>
      <View style={{...styles.feedPostContentRowWrapper, marginBottom: 5}}>
        <Text style={styles.feedPostLikeText}>999 likes</Text>
      </View>
      <View style={{...styles.feedPostContentRowWrapper, marginBottom: 5}}>
        <Text style={{...styles.feedPostDescription, fontWeight: '700'}}>
          {username}{' '}
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

const HomeFeed = forwardRef((props, ref) => {
  const renderItem = ({item}) => (
    <FeedPost post={item} onMorePress={showMoreSheet} />
  );

  const {posts, refreshControl, headerComponent, footerComponent, onLoadMore} =
    props;

  const moreSheetRef = useRef(null);

  const showMoreSheet = () => {
    moreSheetRef.current.present();
  };

  return (
    <View style={styles.feedWrapper}>
      <FlatListLoadMore
        ref={ref}
        data={posts}
        keyExtractor={item => item.id}
        horizontal={false}
        renderItem={renderItem}
        contentContainerStyle={styles.feedFlatList}
        showsVerticalScrollIndicator={false}
        refreshControl={refreshControl}
        ListHeaderComponent={headerComponent ?? null}
        ListFooterComponent={footerComponent ?? null}
        onLoadMore={onLoadMore}
      />
      <MoreBottomSheet ref={moreSheetRef} />
    </View>
  );
});

const styles = StyleSheet.create({
  feedWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fafafa',
  },
  feedFlatList: {},
  feedPostWrapper: {
    marginBottom: 10,
  },
  feedPostImg: {
    width: SCREEN_WIDTH,
    height: (SCREEN_WIDTH / 4) * 5,
    resizeMode: 'contain',
    backgroundColor: 'red',
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
