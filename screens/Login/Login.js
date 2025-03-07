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

const Login = ({navigation}) => {
  const [isSecureTextEntry, setisSecureTextEntry] = useState(true);
  return (
    <SafeAreaView style={globalStyle.whiteBg}>
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
