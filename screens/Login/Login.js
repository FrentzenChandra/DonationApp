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
import {loginUser} from '../../API/user';
import Routes from '../../navigation/Routes';
import {useDispatch} from 'react-redux';
import {login} from '../../redux/reducers/User';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [errorMessage, seterrorMessage] = useState(false);
  return (
    <SafeAreaView style={globalStyle.whiteBg}>
      <View style={Loginstyle.container}>
        <Title title="Welcome Back"></Title>
        <Input
          label="Email"
          placeHolder={'Insert Your Email Here'}
          onChangeText={value => {
            setemail(value);
          }}
        />
        <PasswordInput
          label="Password"
          placeHolder={'Insert Your Password Here'}
          onChangeText={value => {
            setpassword(value);
          }}
        />
        <Text
          style={[
            globalStyle.errorMessage,
            errorMessage ? {display: 'flex'} : {display: 'none'},
          ]}>
          {errorMessage === 'User Not found Try Register'
            ? 'User Not found Try Register'
            : 'Email or Password Invalid'}
        </Text>
        <TouchableOpacity
          style={globalStyle.button}
          onPress={async () => {
            const response = await loginUser(email, password);

            if (response.error) {
              seterrorMessage(response.message);
              console.log(response.error);
              return;
            }
            console.log(response);
            dispatch(login(response.data));
            navigation.navigate(Routes.Home);
          }}>
          <Text style={globalStyle.buttonInfo}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignIn');
          }}>
          <Text style={[Loginstyle.signInText]}>Don't have an account ?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
