import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  Button,
  ActivityIndicator,
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
import {createUser} from '../../API/user';

const SingIn = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, seterrorMessage] = useState(false);
  const [disable, setdisable] = useState(false);
  const [showEmailError, setshowEmailError] = useState(false);
  const [disablePassword, setdisablePassword] = useState(false);
  const [disableName, setdisableName] = useState(false);
  const [loading, setloading] = useState(false);

  const [firstSingin, setfirstSignin] = useState(true);

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
          onChangeText={value => {
            setFullName(value);
            fullName.length <= 8 ? setdisableName(false) : setdisableName(true);
          }}
        />
        <Text
          style={[
            globalStyle.errorMessageInput,
            disableName && firstSingin === true
              ? {display: 'none'}
              : {display: 'flex'},
            fullName.length <= 8 && firstSingin == false
              ? {display: 'flex'}
              : {display: 'none'},
          ]}>
          Name have to be more then 7 characters
        </Text>
        <Input
          autoComplete={'email'}
          label="Email"
          placeHolder={'Insert Your Email Here'}
          onChangeText={value => {
            setEmail(value);
            email.length <= 5
              ? setshowEmailError(false)
              : setshowEmailError(true);
          }}
        />
        <Text
          style={[
            globalStyle.errorMessageInput,
            showEmailError && firstSingin
              ? {display: 'none'}
              : {display: 'flex'},
            email.length <= 5 && firstSingin == false
              ? {display: 'flex'}
              : {display: 'none'},
          ]}>
          it is not an email
        </Text>

        <PasswordInput
          label="Password"
          placeHolder={'Insert Your Password Here'}
          onChangeText={value => {
            setPassword(value);
            password.length <= 2
              ? setdisablePassword(true)
              : setdisablePassword(false);
          }}
        />
        <Text
          style={[
            globalStyle.errorMessageInput,
            disablePassword && firstSingin
              ? {display: 'none'}
              : {display: 'flex'},
            password.length <= 8 && firstSingin == false
              ? {display: 'flex'}
              : {display: 'none'},
          ]}>
          password have to be more then 7 characters
        </Text>
        <Text
          style={[
            globalStyle.errorMessage,
            errorMessage ? {display: 'flex'} : {display: 'none'},
          ]}>
          {errorMessage}
        </Text>
        <ActivityIndicator
          style={
            (globalStyle.loading,
            loading ? {display: 'flex'} : {display: 'none'})
          }
          color={'#DE0f3f'}
          size={horizontalScale(40)}
          animating={true}></ActivityIndicator>

        <TouchableOpacity
          style={[
            globalStyle.button,
            (fullName.length <= 7 ||
              email.length <= 5 ||
              password.length < 8) &&
            firstSingin === false
              ? {opacity: 0.4}
              : {},
          ]}
          disabled={
            (fullName.length <= 7 ||
              email.length <= 5 ||
              password.length < 8) &&
            firstSingin === false
              ? true
              : false
          }
          onPress={async () => {
            fullName.length <= 2 || email.length <= 5 || password.length < 8
              ? setdisable(true)
              : setdisable(false);

            const response = await createUser(fullName, email, password);
            setfirstSignin(false);
            if (response.error) {
              return seterrorMessage(response.message);
            }
            setloading(true);
            navigation.goBack();
          }}>
          <Text style={globalStyle.buttonInfo}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SingIn;
