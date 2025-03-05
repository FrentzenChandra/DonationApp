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
        <Text style={globalStyle.inputInfo}>First & Last Name</Text>
        <TextInput style={globalStyle.input} />
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
          <Text style={globalStyle.buttonInfo}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SingIn;
