import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import donateStyle from './style';
import {fontScale} from '../../assets/style/scaling';
import globalStyle from '../../assets/style/style';

const Donate = ({navigation, route}) => {
  return (
    <SafeAreaView style={globalStyle.whiteBg}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={donateStyle.backIconContainer}>
        <FontAwesomeIcon
          style={donateStyle.backIcon}
          icon={faArrowLeft}
          size={fontScale(21)}></FontAwesomeIcon>
      </TouchableOpacity>
      <Image
        style={donateStyle.image}
        source={{uri: route.params.image}}></Image>
      <View style={donateStyle.donationProductCategory}>
        <Text numberOfLines={2} style={donateStyle.badgeText}>
          Enviroment
        </Text>
      </View>
      <Text style={donateStyle.title}>{route.params.name}</Text>
      <Text style={donateStyle.description}>{route.params.description}</Text>
      <TouchableOpacity style={donateStyle.button} onPress={() => {}}>
        <Text style={donateStyle.buttonInfo}>Donate</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Donate;
