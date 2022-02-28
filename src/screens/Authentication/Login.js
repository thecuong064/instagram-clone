import React, {useState} from 'react';

import {
  StyleSheet,
  Button,
  View,
  Image,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableOpacity,
  Text,
} from 'react-native';
import Screens from '../../constants/Screens';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  STATUS_BAR_HEIGHT,
} from '../../utils/DeviceUtils';

const FOOTER_HEIGHT = 50;

const Login = ({navigation}) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const login = () => {
    Keyboard.dismiss();
  };

  const loginWithFb = () => {
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          height: SCREEN_HEIGHT - STATUS_BAR_HEIGHT,
        }}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={styles.instagramText}
          source={require('../../assets/instagram_text.png')}
        />
        <View style={styles.loginForm}>
          <TextInput
            style={styles.textInput}
            value={username}
            onChangeText={setUsername}
            placeholder="Phone number, email or username"
          />
          <TextInput
            style={styles.textInput}
            value={password}
            secureTextEntry={true}
            onChangeText={setPassword}
            placeholder="Password"
          />
          <TouchableOpacity onPress={() => login()}>
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
              ...styles.divideLine,
              marginVertical: 20,
            }}>
            <View
              style={{
                ...styles.orTextWrapper,
              }}>
              <Text
                style={{
                  color: '#727272',
                  fontWeight: '600',
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
            }}>
            <Text style={styles.loginFbButtonText}>Log in with Facebook</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.footer}>
        <View style={{...styles.divideLine, marginBottom: 0}} />
        <TouchableOpacity
          onPress={null}
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
    marginTop: 100,
    marginBottom: 20,
    tintColor: '#000',
    resizeMode: 'contain',
    height: 50,
  },
  textInput: {
    height: 50,
    padding: 10,
    marginVertical: 7.5,
    borderRadius: 4,
    borderColor: '#e2e2e2',
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    fontSize: 14,
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
  orText: {
    color: '#727272',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  loginFbButtonText: {
    textAlign: 'center',
    color: '#0095f4',
    fontSize: 14,
    fontWeight: 'bold',
  },
  divideLine: {
    height: 1,
    backgroundColor: '#dadada',
  },
});

export default Login;
