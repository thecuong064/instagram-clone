import React, {useEffect, useRef, useState} from 'react';
import Toast from 'react-native-toast-message';
import {useSelector} from 'react-redux';
import {useScrollToTop} from '@react-navigation/native';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  RefreshControl,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import HomeFeed from '../../components/HomeFeed';
import HomeHeader from '../../components/HomeHeader';
import HomeStoriesList from '../../components/HomeStoriesList';
import store from '../../redux/configureStore';
import {getStories, getMorePosts, reloadPosts} from '../../redux/Home/actions';
import {ToastTypes} from '../../utils/ToastUtils';

const Home = navigation => {
  const feedRef = useRef(null);
  useScrollToTop(feedRef);

  const stories = useSelector(state => state.stories.data);
  const posts = useSelector(state => state.posts.data);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isFetchingStories, setIsFetchingStories] = useState(false);
  const [isFetchingPosts, setIsFetchingPosts] = useState(false);
  const [isLoadingMorePosts, setIsLoadingMorePosts] = useState(false);
  const [canLoadMorePosts, setCanLoadMorePosts] = useState(true);
  const [isRefreshFooterVisible, setIsRefreshFooterVisible] = useState(false);
  const [pageCount, setPageCount] = useState(0);

  const POSTS_PER_PAGE = 5;

  useEffect(() => {
    reloadFeed();
  }, []);

  const showToast = message => {
    Toast.show({
      position: 'bottom',
      type: ToastTypes.ERROR,
      props: {
        content: message,
        iconSource: require('../../assets/ic_warning.png'),
      },
    });
  };

  const reloadFeed = () => {
    setIsRefreshing(true);
    setIsFetchingStories(true);
    setIsFetchingPosts(true);
    store.dispatch(
      getStories(
        newStories => {
          setIsFetchingStories(false);
          setIsRefreshing(isFetchingPosts);
        },
        error => {
          setIsFetchingStories(false);
          setIsRefreshing(isFetchingPosts);
          showToast(error.message);
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
        },
        error => {
          setIsFetchingPosts(false);
          setCanLoadMorePosts(true);
          setIsRefreshing(isFetchingStories);
          setIsRefreshFooterVisible(true);
          showToast(error.message);
        },
      ),
    );
  };

  const scrollToTopAndReloadFeed = () => {
    feedRef.current?.scrollToOffset({
      offset: 0,
      animated: true,
    });
    setIsRefreshFooterVisible(false);
    reloadFeed();
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
          setIsRefreshFooterVisible(true);
        },
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <View style={styles.dividerLine} />
      <HomeFeed
        ref={feedRef}
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
          isLoadingMorePosts ? (
            <ActivityIndicator size="large" />
          ) : (
            isRefreshFooterVisible && (
              <TouchableOpacity
                style={styles.refreshFooterWrapper}
                onPress={scrollToTopAndReloadFeed}>
                <Image
                  style={styles.refreshFooterButton}
                  source={require('../../assets/ic_refresh.png')}
                />
              </TouchableOpacity>
            )
          )
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
  refreshFooterWrapper: {
    marginBottom: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#b7b7b7',
  },
  refreshFooterButton: {
    width: 20,
    height: 20,
    tintColor: '#b7b7b7',
  },
});

export default Home;
