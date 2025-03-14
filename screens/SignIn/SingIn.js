import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import Title from '../../component/Title/Title';
import SignInStyle from './Style';
import globalStyle from '../../assets/style/style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons/faEye';
import {fontScale, horizontalScale} from '../../assets/style/scaling';
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons/faEyeSlash';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import Input from '../../component/Input/Input';
import PasswordInput from '../../component/PasswordInput/PasswordInput';

const SingIn = ({navigation}) => {
  const [isSecureTextEntry, setisSecureTextEntry] = useState(true);
  return (
    <SafeAreaView style={globalStyle.whiteBg}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesomeIcon
          style={globalStyle.backButton}
          icon={faArrowLeft}
          size={horizontalScale(18)}
        />
      </TouchableOpacity>
      <View style={SignInStyle.container}>
        <Title title="Hello and Welcome !"></Title>
        <Input
          label="First name & Last name"
          placeHolder={'Insert Your Name'}
          onChangeText={value => {}}
        />
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

        <TouchableOpacity style={globalStyle.button}>
          <Text style={globalStyle.buttonInfo}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SingIn;
