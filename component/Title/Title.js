import React, {useState, useEffect} from 'react';
import TitleStyle from './Style';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

const Title = props => {
  return <Text style={TitleStyle.Title}>{props.title}</Text>;
};

Title.props = {
  title: PropTypes.string.isRequired,
};

export default Title;
