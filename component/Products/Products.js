import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import style from './Style';
import PropTypes from 'prop-types';

const Products = props => {
  return (
    <View style={style.donationItemsContainer}>
      <ImageBackground
        source={{
          uri: props.pictureUrl,
        }}
        resizeMode="cover"
        style={style.donationProductPicture}>
        <View style={style.donationProductCategory}>
          <Text style={style.badgeText}>{props.category}</Text>
        </View>
      </ImageBackground>
      <Text style={style.donationProductCategoryName}>{props.name}</Text>
      <Text
        style={[
          style.donationProductCategoryName,
          {color: '#156CF7', marginBottom: 20},
        ]}>
        {`$ ${props.price}`}
      </Text>
    </View>
  );
};

Products.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string.isRequired,
};

export default Products;
