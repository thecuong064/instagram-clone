import React from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {LocalResources} from '../../constants/LocalResources';

const FooterLoadingIndicator = props => {
  const {isLoadingMore, isRefreshFooterVisible, onRefreshButtonPress} = props;

  return isLoadingMore ? (
    <ActivityIndicator size="large" />
  ) : (
    isRefreshFooterVisible && (
      <TouchableOpacity
        style={styles.refreshFooterWrapper}
        onPress={onRefreshButtonPress}>
        <Image
          style={styles.refreshFooterButton}
          source={LocalResources.Icons.ic_refresh}
        />
      </TouchableOpacity>
    )
  );
};

const styles = StyleSheet.create({
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

export default FooterLoadingIndicator;
