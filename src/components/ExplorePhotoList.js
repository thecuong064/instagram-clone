import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import {SCREEN_WIDTH} from '../utils/DeviceUtils';
import ExplorePhoto from './ExplorePhoto';

const itemSpacing = 2;
const itemPerRow = 3;
const photoWidth = (SCREEN_WIDTH - itemSpacing * 2) / itemPerRow;
const photoHeight = photoWidth;

const ExplorePhotoList = props => {
  const {data, onPress} = props;

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
    <FlatList
      style={styles.photosList}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal={false}
      numColumns={itemPerRow}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={{
        justifyContent: 'space-between',
      }}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

const styles = StyleSheet.create({
  photosList: {
    backgroundColor: '#fff',
  },
});

export default ExplorePhotoList;
