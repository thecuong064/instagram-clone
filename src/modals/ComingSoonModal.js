import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import Modal from 'react-native-modal';
import {LocalResources} from '../constants/LocalResources';
import {dismissModal} from '../redux/common/actions/modalActions';
import store from '../redux/configureStore';

export const ComingSoonModal = props => {
  const {isVisible} = props;
  return (
    <Modal
      isVisible={isVisible}
      style={styles.container}
      onBackdropPress={() => store.dispatch(dismissModal())}>
      <View style={styles.middleModal}>
        <Image
          style={styles.image}
          source={LocalResources.Images.banner_coming_soon}
        />
        <Text style={styles.message}>
          We are working hard to bring you this fantastic feature. Please stay
          tuned.
        </Text>
        <TouchableOpacity
          onPress={() => store.dispatch(dismissModal())}
          activeOpacity={0.6}
          style={styles.dismissButtonWrapper}>
          <Text style={styles.dismissButtonText}>Got it</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
  middleModal: {
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 20,
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  image: {
    height: 150,
    width: '100%',
    marginHorizontal: 10,
    resizeMode: 'contain',
  },
  dismissButtonWrapper: {
    height: 50,
    backgroundColor: '#0095f4',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: 20,
  },
  dismissButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  message: {
    color: '#727272',
    fontSize: 14,
    textAlign: 'center',
  },
});
