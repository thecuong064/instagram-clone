import React, {forwardRef} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {LocalResources} from '../../constants/LocalResources';
import {BottomSheetBackdrop, BottomSheetModal} from '@gorhom/bottom-sheet';

export const MoreBottomSheet = forwardRef((props, sheetRef) => {
  const snapPoints = ['50%'];

  const hide = () => {
    sheetRef.current && sheetRef.current.close();
  };

  return (
    <BottomSheetModal
      handleIndicatorStyle={styles.handleIndicatorStyle}
      ref={sheetRef}
      index={0}
      snapPoints={snapPoints}
      backdropComponent={backdropProps => (
        <BottomSheetBackdrop
          {...backdropProps}
          enableTouchThrough={true}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      )}
      enablePanDownToClose={true}>
      <View style={styles.topGroupWrapper}>
        <IconButton
          iconSource={LocalResources.Icons.ic_share}
          title={'Share'}
        />
        <IconButton iconSource={LocalResources.Icons.ic_link} title={'Link'} />
        <IconButton
          iconSource={LocalResources.Icons.ic_report}
          title={'Report'}
          isDanger={true}
        />
      </View>
      <View style={styles.bottomGroupWrapper}>
        <BottomGroupButton title={'Add to favorites'} />
        <View style={styles.bottomGroupDivider} />
        <BottomGroupButton title={'Hide'} />
        <View style={styles.bottomGroupDivider} />
        <BottomGroupButton title={'Unfollow'} />
      </View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  handleIndicatorStyle: {
    backgroundColor: '#dadada',
  },
  topGroupWrapper: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    marginTop: 16,
  },
  iconButtonWrapper: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: '#efefef',
    paddingVertical: 12,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonImage: {
    width: 24,
    height: 24,
    tintColor: '#000',
  },
  iconButtonTitle: {
    color: '#000',
    marginTop: 6,
    fontSize: 12,
  },
  iconButtonImageDanger: {
    tintColor: '#fa3b5f',
  },
  iconButtonTitleDanger: {
    color: '#fa3b5f',
  },
  bottomGroupWrapper: {
    borderRadius: 12,
    backgroundColor: '#efefef',
    marginTop: 12,
    marginHorizontal: 25,
  },
  bottomGroupButtonWrapper: {
    paddingVertical: 18,
    alignItems: 'center',
  },
  bottomGroupButtonTitle: {
    color: '#000',
    fontSize: 16,
  },
  bottomGroupDivider: {
    height: 0.5,
    backgroundColor: '#dadada',
  },
});

const IconButton = props => {
  const {iconSource, title, isDanger} = props;
  return (
    <TouchableOpacity style={styles.iconButtonWrapper}>
      <Image
        source={iconSource}
        style={
          isDanger
            ? {...styles.iconButtonImage, ...styles.iconButtonImageDanger}
            : {...styles.iconButtonImage}
        }
      />
      <Text
        style={{
          ...styles.iconButtonTitle,
          ...(isDanger ? {...styles.iconButtonTitleDanger} : null),
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const BottomGroupButton = props => {
  const {title} = props;
  return (
    <TouchableOpacity style={styles.bottomGroupButtonWrapper}>
      <Text style={{...styles.bottomGroupButtonTitle, ...styles.dan}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
