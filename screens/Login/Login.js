import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import Title from '../../component/Title/Title';
import Loginstyle from './Style';
import globalStyle from '../../assets/style/style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons/faEye';
import {fontScale} from '../../assets/style/scaling';
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons/faEyeSlash';
import Input from '../../component/Input/Input';
import PasswordInput from '../../component/PasswordInput/PasswordInput';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={globalStyle.whiteBg}>
      <View style={Loginstyle.container}>
        <Title title="Welcome Back"></Title>
        <Input
          label="Email"
          placeHolder={'Insert Your Email Here'}
          onChangeText={value => {}}
        />
        <PasswordInput
          label="Password"
          placeHolder={'Insert Your Password Here'}
          onChangeText={value => {}}
        />
        <TouchableOpacity
          style={globalStyle.button}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={globalStyle.buttonInfo}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={[Loginstyle.signInText]}>Don't have an account ?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
