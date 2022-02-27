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
        style={styles.mainContent}>
        <Image
          style={styles.instagramText}
          source={require('../../assets/instagram_text.png')}
        />
        <TextInput
          style={styles.taskTextInput}
          value={username}
          onChangeText={setUsername}
          placeholder="Phone number, email or username"
        />
        <TextInput
          style={styles.taskTextInput}
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

        <Text
          style={{
            textAlign: 'center',
            marginBottom: 15,
          }}>
          <Text style={styles.forgotLoginText}>
            Forgot your login details?{' '}
          </Text>
          <Text style={styles.helpLoginText}>Get help with logging in.</Text>
        </Text>
        <Text style={styles.orText}>OR</Text>
        <TouchableOpacity onPress={() => loginWithFb()}>
          <Text style={styles.loginFbButtonText}>Log in with Facebook</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEFEFE',
    flex: 1,
  },
  mainContent: {
    flex: 1,
    padding: 20,
  },
  footer: {
    height: 50,
    backgroundColor: 'green',
  },
  instagramText: {
    marginTop: 50,
    tintColor: '#000',
    resizeMode: 'contain',
    height: 50,
  },
  taskTextInput: {
    height: 50,
    padding: 10,
    marginVertical: 15,
    borderRadius: 4,
    borderColor: '#e2e2e2',
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
  orText: {
    color: '#727272',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  loginFbButtonText: {
    textAlign: 'center',
    color: '#0095f4',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Login;
