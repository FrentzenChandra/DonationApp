import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import style from './Style';
import PropTypes from 'prop-types';

const Products = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={style.donationItemsContainer}>
      <ImageBackground
        source={{
          uri: props.pictureUrl,
        }}
        resizeMode="cover"
        style={style.donationProductPicture}>
        <View style={style.donationProductCategory}>
          <Text numberOfLines={2} style={style.badgeText}>
            {props.category}
          </Text>
        </View>
      </ImageBackground>
      <Text numberOfLines={1} style={style.donationProductCategoryName}>
        {props.name}
      </Text>
      <Text
        style={[
          style.donationProductCategoryName,
          {color: '#156CF7', marginBottom: 20},
        ]}>
        {`$ ${props.price}`}
      </Text>
    </TouchableOpacity>
  );
};

Products.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string.isRequired,
  onPress: PropTypes.any.isRequired,
};

export default Products;
