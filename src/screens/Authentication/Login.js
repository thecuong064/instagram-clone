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
import Screens from '../../navigators/Screens';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SCREEN_WIDTH} from '../../utils/DeviceUtils';
import {AuthenticationHelper} from '../../utils/AuthenticationHelper';
import {LocalResources} from '../../constants/LocalResources';

const FOOTER_HEIGHT = 50;

export const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isLoginAllowed, setIsLoginAllowed] = useState(false);

  const ref_password_input = useRef();

  const checkLoginAllowed = (user, pass) => {
    setIsLoginAllowed(user.length > 0 && pass.length >= 6);
  };

  const onUsernameChanged = newValue => {
    setUsername(newValue);
    checkLoginAllowed(newValue, password);
  };

  const onPasswordChanged = newValue => {
    setPassword(newValue);
    checkLoginAllowed(username, newValue);
  };

  const login = async () => {
    Keyboard.dismiss();

    try {
      if (await AuthenticationHelper.login(username, password)) {
        navigation.navigate(Screens.MAIN);
        return;
      }
      console.log('login error');
    } catch (error) {
      console.log('login error: ' + error);
    }
  };

  const gotoRegistration = () => {
    Keyboard.dismiss();
    navigation.navigate(Screens.REGISTRATION);
  };

  const loginWithFb = () => {
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
        }}>
        <Image
          style={styles.instagramText}
          source={LocalResources.Images.instagram_text}
        />
        <View style={styles.loginForm}>
          <View style={{...styles.textInputWrapper, marginTop: 0}}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              style={{...styles.textInput, marginTop: 0}}
              value={username}
              onChangeText={newVal => onUsernameChanged(newVal)}
              placeholder="Phone number, email or username"
              blurOnSubmit={false}
              returnKeyType="next"
              onSubmitEditing={() => ref_password_input.current.focus()}
            />
          </View>
          <View style={{...styles.textInputWrapper}}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              style={{...styles.textInput, marginRight: 0}}
              value={password}
              secureTextEntry={isPasswordHidden}
              onChangeText={newVal => onPasswordChanged(newVal)}
              placeholder="Password"
              ref={ref_password_input}
            />
            <TouchableOpacity
              onPress={() => setIsPasswordHidden(!isPasswordHidden)}
              style={{
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              activeOpacity={0.8}>
              <Image
                source={
                  isPasswordHidden
                    ? LocalResources.Icons.ic_eye_hidden
                    : LocalResources.Icons.ic_eye_visible
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor: isPasswordHidden ? '#9b9b9b' : '#0095f4',
                }}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => login()}
            style={{
              opacity: isLoginAllowed ? 1 : 0.6,
            }}
            disabled={!isLoginAllowed}
            activeOpacity={0.6}>
            <View style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Log in</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={null}
            style={styles.forgotPassword}
            activeOpacity={1}>
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
                Forgot your login details?{' '}
              </Text>
              Get helping logging in.
            </Text>
          </TouchableOpacity>
          <View
            style={{
              ...styles.dividerLine,
              marginVertical: 20,
            }}>
            <View
              style={{
                ...styles.orTextWrapper,
              }}>
              <Text
                style={{
                  color: '#727272',
                  fontWeight: 'bold',
                  fontSize: 14,
                }}>
                OR
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => loginWithFb()}
            style={{
              marginBottom: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                height: 25,
                width: 25,
                marginRight: 10,
                resizeMode: 'contain',
              }}
              source={LocalResources.Images.logo_fb_rounded}
            />
            <Text style={styles.loginFbButtonText}>Log in with Facebook</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.footer}>
        <View style={styles.dividerLine} />
        <TouchableOpacity
          onPress={gotoRegistration}
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
              Don't have an account?{' '}
            </Text>
            Sign up.
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
  loginForm: {
    width: SCREEN_WIDTH * 0.9,
  },
  footer: {
    height: FOOTER_HEIGHT,
  },
  instagramText: {
    marginTop: 20,
    marginBottom: 20,
    tintColor: '#000',
    resizeMode: 'contain',
    height: 50,
  },
  textInputWrapper: {
    height: 50,
    marginVertical: 7.5,
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
    flex: 1,
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
  loginButton: {
    height: 50,
    backgroundColor: '#0095f4',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 7.5,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  forgotLoginText: {
    color: '#a2a2a2',
    fontSize: 12,
  },
  helpLoginText: {
    color: '#0d4172',
    fontSize: 12,
    fontWeight: 'bold',
  },
  orTextWrapper: {
    width: 40,
    height: 20,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: (2 - 20) / 2,
    left: (SCREEN_WIDTH * 0.9 - 40) / 2,
    paddingHorizontal: 10,
    backgroundColor: '#fefefe',
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
});
