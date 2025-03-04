import React, {useState, useEffect} from 'react';
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
import TitleStyle from '../../component/Title/Style';

const Login = () => {
  const [isSecureTextEntry, setisSecureTextEntry] = useState(true);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={Loginstyle.container}>
        <Title title="Welcome Back"></Title>
        <Text style={globalStyle.inputInfo}>Email</Text>
        <TextInput style={globalStyle.input} />
        <Text style={globalStyle.inputInfo}>Password</Text>
        <View style={globalStyle.passwordInputContainer}>
          <TextInput
            style={globalStyle.passwordInput}
            secureTextEntry={isSecureTextEntry}></TextInput>
          <TouchableOpacity
            style={globalStyle.passwordInputIcon}
            onPress={() => {
              setisSecureTextEntry(!isSecureTextEntry);
            }}>
            <FontAwesomeIcon
              size={fontScale(22)}
              icon={isSecureTextEntry ? faEye : faEyeSlash}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={globalStyle.button}>
          <Text style={globalStyle.buttonInfo}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={Loginstyle.signInText}>Don't have an account ?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
