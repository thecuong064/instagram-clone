import React, {useState, useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';
import {useScrollToTop} from '@react-navigation/native';

import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  Image,
  RefreshControl,
} from 'react-native';
import ExplorePhotoList from '../../components/ExplorePhotoList';
import store from '../../redux/configureStore';
import {
  reloadExplorePhotos,
  getMoreExplorePhotos,
} from '../../redux/Explore/actions';
import FooterLoadingIndicator from '../../components/FooterLoadingIndicator';
import {ToastUtils} from '../../utils/ToastUtils';
import {LocalResources} from '../../constants/LocalResources';

const POSTS_PER_PAGE = 24;

const Explore = navigation => {
  const galleryRef = useRef(null);
  useScrollToTop(galleryRef);

  const photos = useSelector(state => state.explorePhotos.data);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoadingMorePhotos, setIsLoadingMorePhotos] = useState(false);
  const [canLoadMorePhotos, setCanLoadMorePhotos] = useState(true);
  const [isRefreshFooterVisible, setIsRefreshFooterVisible] = useState(false);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    reload();
  }, []);

  const reload = () => {
    setIsRefreshing(true);

    let params = {
      _page: 1,
      _limit: POSTS_PER_PAGE,
    };
    setPageCount(1);

    store.dispatch(
      reloadExplorePhotos(
        params,
        newPhotos => {
          setIsRefreshing(false);
          setCanLoadMorePhotos(newPhotos?.length >= POSTS_PER_PAGE);
        },
        error => {
          setIsRefreshing(false);
          setCanLoadMorePhotos(false);
          ToastUtils.showErrorToast({
            message: error.message,
          });
        },
      ),
    );
  };

  const loadMorePhotos = () => {
    if (!canLoadMorePhotos || isLoadingMorePhotos) {
      return;
    }
    setIsLoadingMorePhotos(true);

    let params = {
      _page: pageCount + 1,
      _limit: POSTS_PER_PAGE,
    };
    setPageCount(pageCount + 1);

    store.dispatch(
      getMoreExplorePhotos(
        params,
        newPhotos => {
          setIsLoadingMorePhotos(false);
          setCanLoadMorePhotos(newPhotos?.length >= POSTS_PER_PAGE);
        },
        error => {
          setIsLoadingMorePhotos(false);
          setCanLoadMorePhotos(false);
          ToastUtils.showErrorToast({
            message: error.message,
          });
        },
      ),
    );
  };

  const scrollToTopAndReload = () => {
    galleryRef.current?.scrollToOffset({
      offset: 0,
      animated: true,
    });
    setIsRefreshFooterVisible(false);
    reload();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarWrapper}>
        <Image
          style={styles.searchBarIcon}
          source={LocalResources.Icons.ic_search}
        />
        <TextInput style={styles.searchBarTextInput} placeholder={'Search'} />
      </View>

      <ExplorePhotoList
        ref={galleryRef}
        data={photos}
        onLoadMore={loadMorePhotos}
        refreshControl={
          <RefreshControl onRefresh={reload} refreshing={isRefreshing} />
        }
        footerComponent={
          <FooterLoadingIndicator
            isLoadingMore={isLoadingMorePhotos}
            isRefreshFooterVisible={isRefreshFooterVisible}
            onRefreshButtonPress={scrollToTopAndReload}
          />
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  searchBarWrapper: {
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    height: 40,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  searchBarTextInput: {
    fontSize: 16,
  },
  searchBarIcon: {
    width: 18,
    height: 18,
    tintColor: '#000000',
    marginHorizontal: 15,
  },
});

export default Explore;
