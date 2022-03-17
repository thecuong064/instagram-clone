import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

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

const Home = navigation => {
  const stories = useSelector(state => state.stories.data);
  const posts = useSelector(state => state.posts.data);
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
        onSuccess => {
          setIsFetchingStories(false);
          setIsRefreshing(isFetchingPosts);
        },
        onFailed => {
          setIsFetchingStories(false);
          setIsRefreshing(isFetchingPosts);
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
          setIsRefreshing(isFetchingStories);
        },
        error => {
          setIsFetchingPosts(false);
          setIsRefreshing(isFetchingStories);
        },
      ),
    );

    setCanLoadMorePosts(true);
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

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <View style={styles.dividerLine} />
      <HomeFeed
        posts={posts}
        refreshControl={
          <RefreshControl onRefresh={reloadFeed} refreshing={isRefreshing} />
        }
        headerComponent={
          <View>
            <HomeStoriesList data={stories} />
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
