import React, {useState, useRef} from 'react';

import {
  StyleSheet,
  View,
  Image,
  TextInput,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
  Text,
} from 'react-native';
import Screens from '../../constants/Screens';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SCREEN_WIDTH} from '../../utils/DeviceUtils';

const FOOTER_HEIGHT = 50;

const Registration = ({navigation}) => {
  const tabs = {
    PHONE: 1,
    EMAIL: 2,
  };

  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isClearEmailVisible, setIsClearEmailVisible] = useState(false);
  const [isClearPhoneVisible, setIsClearPhoneVisible] = useState(false);
  const [isSignupAllowed, setIsSignupAllowed] = useState(false);
  const [selectedTab, setSelectedTab] = useState(tabs.EMAIL);

  const checkSignupAllowed = (
    newEmail = '',
    newPhoneNumber = '',
    newSelectedTab = tabs.EMAIL,
  ) => {
    setIsSignupAllowed(
      (newEmail.length > 0 && newSelectedTab === tabs.EMAIL) ||
        (newPhoneNumber.length > 0 && newSelectedTab === tabs.PHONE),
    );
  };

  const onEmailChanged = newValue => {
    setEmail(newValue);
    checkSignupAllowed(newValue, '', selectedTab);
    setIsClearEmailVisible(newValue.length > 0);
  };

  const onPhoneNumberChanged = newValue => {
    setPhoneNumber(newValue);
    checkSignupAllowed('', newValue, selectedTab);
    setIsClearPhoneVisible(newValue.length > 0);
  };

  const signUp = () => {
    Keyboard.dismiss();
    navigation.navigate(Screens.MAIN);
  };

  const goBack = () => {
    Keyboard.dismiss();
    navigation.goBack();
  };

  const clearForm = () => {
    switch (selectedTab) {
      case tabs.EMAIL:
        onEmailChanged('');
        break;

      case tabs.PHONE:
        onPhoneNumberChanged('');
        break;

      default:
        break;
    }
  };

  const selectTab = tab => {
    // Need handling to prevent keyboard dismissed when changing tab
    checkSignupAllowed(email, phoneNumber, tab);
    setSelectedTab(tab);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps={'handled'}>
        <Image
          style={styles.iconUser}
          source={require('../../assets/ic_signup_user.png')}
        />
        <View style={styles.signUpForm}>
          <View style={styles.tabBarWrapper}>
            <TouchableOpacity
              style={styles.tabWrapper}
              onPress={() => selectTab(tabs.PHONE)}>
              <Text
                style={
                  selectedTab === tabs.PHONE
                    ? styles.tabTitleSelected
                    : styles.tabTitle
                }>
                PHONE
              </Text>
              <View
                style={
                  selectedTab === tabs.PHONE
                    ? styles.tabIndicatorSelected
                    : styles.tabIndicator
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tabWrapper}
              onPress={() => selectTab(tabs.EMAIL)}>
              <Text
                style={
                  selectedTab === tabs.EMAIL
                    ? styles.tabTitleSelected
                    : styles.tabTitle
                }>
                EMAIL
              </Text>
              <View
                style={
                  selectedTab === tabs.EMAIL
                    ? styles.tabIndicatorSelected
                    : styles.tabIndicator
                }
              />
            </TouchableOpacity>
          </View>
          {selectedTab === tabs.EMAIL && (
            <View style={styles.textInputWrapper}>
              <TextInput
                style={styles.textInput}
                value={email}
                onChangeText={newVal => onEmailChanged(newVal)}
                placeholder="Email"
              />
              {isClearEmailVisible && (
                <TouchableOpacity
                  onPress={clearForm}
                  style={styles.textInputButtonWrapper}
                  activeOpacity={0.8}>
                  <Image
                    source={require('../../assets/ic_clear_text_input.png')}
                    style={styles.textInputButton}
                  />
                </TouchableOpacity>
              )}
            </View>
          )}
          {selectedTab === tabs.PHONE && (
            <View style={styles.textInputWrapper}>
              <TextInput
                style={styles.textInput}
                value={phoneNumber}
                onChangeText={newVal => onPhoneNumberChanged(newVal)}
                placeholder="Phone number"
              />
              {isClearPhoneVisible && (
                <TouchableOpacity
                  onPress={clearForm}
                  style={styles.textInputButtonWrapper}
                  activeOpacity={0.8}>
                  <Image
                    source={require('../../assets/ic_clear_text_input.png')}
                    style={styles.textInputButton}
                  />
                </TouchableOpacity>
              )}
            </View>
          )}

          <TouchableOpacity
            onPress={signUp}
            style={{
              opacity: isSignupAllowed ? 1 : 0.6,
            }}
            disabled={!isSignupAllowed}
            activeOpacity={0.6}>
            <View style={styles.signupButton}>
              <Text style={styles.signupButtonText}>Sign up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.footer}>
        <View style={styles.dividerLine} />
        <TouchableOpacity
          onPress={goBack}
          activeOpacity={1}
          style={{
            height: 20,
            top: (FOOTER_HEIGHT - 20) / 2,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              fontWeight: 'bold',
              color: '#013769',
            }}>
            <Text
              style={{
                fontWeight: '500',
                color: '#727272',
              }}>
              Already have an account?{' '}
            </Text>
            Log in.
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fefefe',
    flex: 1,
  },
  signUpForm: {
    width: SCREEN_WIDTH * 0.9,
  },
  footer: {
    height: FOOTER_HEIGHT,
  },
  iconUser: {
    marginTop: 20,
    marginBottom: 25,
    tintColor: '#000',
    resizeMode: 'contain',
    height: 100,
    width: 100,
  },
  textInputWrapper: {
    height: 50,
    marginBottom: 7.5,
    borderRadius: 4,
    borderColor: '#e2e2e2',
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    fontSize: 14,
    flexDirection: 'row',
  },
  textInput: {
    paddingHorizontal: 10,
    fontSize: 14,
    marginRight: 40,
    flexGrow: 1,
  },
  textInputButtonWrapper: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputButton: {
    height: 20,
    width: 20,
    tintColor: '#9b9b9b',
  },
  signupButton: {
    height: 50,
    backgroundColor: '#0095f4',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 7.5,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  loginFbButtonText: {
    textAlign: 'center',
    color: '#0095f4',
    fontSize: 14,
    fontWeight: 'bold',
  },
  dividerLine: {
    height: 1,
    backgroundColor: '#dadada',
  },
  tabBarWrapper: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 10,
  },
  tabIndicator: {
    height: 1,
    backgroundColor: '#dadada',
    width: '100%',
    marginTop: 10,
  },
  tabIndicatorSelected: {
    height: 2,
    backgroundColor: '#000000',
    width: '100%',
    marginTop: 10,
  },
  tabTitle: {
    color: '#9b9b9b',
    fontSize: 14,
    fontWeight: 'bold',
  },
  tabTitleSelected: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  tabWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Registration;
