import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {useScrollToTop} from '@react-navigation/native';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import HomeFeed from '../../components/HomeFeed';
import HomeHeader from '../../components/HomeHeader';
import HomeStoriesList from '../../components/HomeStoriesList';
import store from '../../redux/configureStore';
import {getStories, getMorePosts, reloadPosts} from '../../redux/Home/actions';
import LocalStorageUtils from '../../utils/LocalStorageUtils';

const Home = navigation => {
  const feedRef = useRef(null);
  useScrollToTop(feedRef);

  const stories = useSelector(state => state.stories.data);
  const posts = useSelector(state => state.posts.data);
  const [localStories, setLocalStories] = useState([]);
  const [localPosts, setLocalPosts] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isFetchingStories, setIsFetchingStories] = useState(false);
  const [isFetchingPosts, setIsFetchingPosts] = useState(false);
  const [isLoadingMorePosts, setIsLoadingMorePosts] = useState(false);
  const [canLoadMorePosts, setCanLoadMorePosts] = useState(true);
  const [pageCount, setPageCount] = useState(0);

  const POSTS_PER_PAGE = 6;

  useEffect(() => {
    reloadFeed();
  }, []);

  const reloadFeed = () => {
    setIsRefreshing(true);
    setIsFetchingStories(true);
    setIsFetchingPosts(true);
    store.dispatch(
      getStories(
        newStories => {
          setIsFetchingStories(false);
          setIsRefreshing(isFetchingPosts);
          storeStoriesToLocalStorage(newStories);
        },
        error => {
          fetchStoriesfromLocalStorage();
        },
      ),
    );

    let params = {
      _page: 1,
      _limit: POSTS_PER_PAGE,
    };
    setPageCount(1);
    store.dispatch(
      reloadPosts(
        params,
        newPosts => {
          setIsFetchingPosts(false);
          setCanLoadMorePosts(true);
          setIsRefreshing(isFetchingStories);
          storePostsToLocalStorage(newPosts);
        },
        error => {
          fetchPostsfromLocalStorage();
        },
      ),
    );
  };

  const loadMorePosts = () => {
    if (!canLoadMorePosts || isLoadingMorePosts) {
      return;
    }
    setIsLoadingMorePosts(true);
    let params = {
      _page: pageCount + 1,
      _limit: POSTS_PER_PAGE,
    };
    setPageCount(pageCount + 1);
    store.dispatch(
      getMorePosts(
        params,
        newPosts => {
          setIsLoadingMorePosts(false);
          setCanLoadMorePosts(newPosts?.length >= POSTS_PER_PAGE);
        },
        error => {
          setIsLoadingMorePosts(false);
          setCanLoadMorePosts(false);
        },
      ),
    );
  };

  const storePostsToLocalStorage = async newPosts => {
    await LocalStorageUtils.storePosts(newPosts);
  };

  const fetchPostsfromLocalStorage = async () => {
    setLocalPosts(await LocalStorageUtils.getPosts());
    setIsFetchingPosts(false);
    setCanLoadMorePosts(true);
    setIsRefreshing(isFetchingStories);
  };

  const storeStoriesToLocalStorage = async newStories => {
    await LocalStorageUtils.storeStories(newStories);
  };

  const fetchStoriesfromLocalStorage = async () => {
    setLocalStories(await LocalStorageUtils.getStories());
    setIsFetchingStories(false);
    setIsRefreshing(isFetchingPosts);
  };

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <View style={styles.dividerLine} />
      <HomeFeed
        ref={feedRef}
        posts={posts?.length > 0 ? posts : localPosts}
        refreshControl={
          <RefreshControl onRefresh={reloadFeed} refreshing={isRefreshing} />
        }
        headerComponent={
          <View>
            <HomeStoriesList
              data={stories?.length > 0 ? stories : localStories}
            />
            <View style={styles.dividerLine} />
          </View>
        }
        footerComponent={
          isLoadingMorePosts && <ActivityIndicator size="large" />
        }
        onLoadMore={loadMorePosts}
      />
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
