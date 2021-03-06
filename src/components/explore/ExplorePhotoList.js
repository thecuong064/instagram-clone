import React, {forwardRef} from 'react';
import {View, StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../../utils/DeviceUtils';
import {FlatListLoadMore} from '../general';
import {ExplorePhoto} from './ExplorePhoto';

const itemSpacing = 2;
const itemPerRow = 3;
const photoWidth = (SCREEN_WIDTH - itemSpacing * 2) / itemPerRow;
const photoHeight = photoWidth;

export const ExplorePhotoList = forwardRef((props, ref) => {
  const {data, onPress, onLoadMore, refreshControl, footerComponent} = props;

  const renderItem = ({item}) => {
    return (
      <ExplorePhoto
        photo={item}
        width={photoWidth}
        height={photoHeight}
        onPress={onPress}
      />
    );
  };

  const ItemSeparator = () => {
    return <View style={{height: itemSpacing}} />;
  };

  return (
    <FlatListLoadMore
      ref={ref}
      style={styles.photosList}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal={false}
      numColumns={itemPerRow}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={
        itemPerRow > 1 ? styles.photosListColumnWrapperStyle : null
      }
      ItemSeparatorComponent={ItemSeparator}
      onLoadMore={onLoadMore}
      refreshControl={refreshControl}
      ListFooterComponent={footerComponent ?? null}
    />
  );
});

const styles = StyleSheet.create({
  photosList: {
    backgroundColor: '#fff',
  },
  photosListColumnWrapperStyle: {
    justifyContent: 'space-between',
  },
});
