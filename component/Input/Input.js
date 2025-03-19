import React, {useState, useEffect} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import globalStyle from '../../assets/style/style';

import PropTypes from 'prop-types';

const Input = props => {
  const [inputValue, setInputValue] = useState();
  return (
    <>
      <Text style={globalStyle.inputInfo}>{props.label}</Text>
      <TextInput
        autoComplete={props.autoComplete}
        placeholder={props.placeHolder}
        style={globalStyle.input}
        onChangeText={value => {
          setInputValue(value);
          props.onChangeText(value);
        }}
        value={inputValue}
      />
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  autoComplete: PropTypes.string,
};

export default Input;
