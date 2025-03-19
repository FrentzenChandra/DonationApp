import React, {useState, useEffect} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import globalStyle from '../../assets/style/style';
import {faEye} from '@fortawesome/free-solid-svg-icons/faEye';
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons/faEyeSlash';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {fontScale} from '../../assets/style/scaling';
import PropTypes from 'prop-types';

const PasswordInput = props => {
  const [isSecureTextEntry, setisSecureTextEntry] = useState(true);
  const [inputValue, setinputValue] = useState();
  return (
    <>
      <Text style={globalStyle.inputInfo}>{props.label}</Text>
      <View style={globalStyle.passwordInputContainer}>
        <TextInput
          autoComplete="password"
          placeholder={props.placeHolder}
          style={globalStyle.passwordInput}
          secureTextEntry={isSecureTextEntry}
          onChangeText={value => {
            setinputValue(value);
            props.onChangeText(value);
          }}
          value={inputValue}></TextInput>
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
    </>
  );
};

PasswordInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
};

export default PasswordInput;
