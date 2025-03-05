import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState, useEffect, version} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import HomeStyle from './Style';
import Title from '../../component/Title/Title';
import globalStyle from '../../assets/style/style';
import {horizontalScale, verticalScale} from '../../assets/style/scaling';
import {
  faArrowRight,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import {height} from '@fortawesome/free-solid-svg-icons/faMugSaucer';

const categorys = [
  {
    name: 'Education',
    description: 'Support schools, scholarships, and educational programs.',
  },
  {
    name: 'Healthcare',
    description: 'Fund medical research, hospitals, and healthcare access.',
  },
  {
    name: 'Disaster Relief',
    description: 'Provide aid for natural disasters and emergencies.',
  },
  {
    name: 'Animal Welfare',
    description: 'Help animal shelters, conservation, and rescue efforts.',
  },
  {
    name: 'Environmental Conservation',
    description: 'Support initiatives to protect the planet and ecosystems.',
  },
  {
    name: 'Hunger Relief',
    description: 'Donate to food banks and programs fighting hunger.',
  },
  {
    name: 'Arts and Culture',
    description: 'Fund museums, theaters, and cultural preservation.',
  },
];

const Home = () => {
  const [whicButtonActive, setwhicButtonActive] = useState(categorys[0].name);

  return (
    <SafeAreaView style={HomeStyle.container}>
      <View style={HomeStyle.headerContainer}>
        <View>
          <Text style={HomeStyle.greeting}>Hello,</Text>
          <Title title="Acen Chandra.🤗" />
        </View>
        <Image
          source={require('../../assets/pictures/profile.png')}
          style={globalStyle.profileImage}></Image>
      </View>
      <View style={globalStyle.searchInputContainer}>
        <TouchableOpacity>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size={horizontalScale(22)}
            color="#25C0FF"
          />
        </TouchableOpacity>
        <TextInput style={globalStyle.searchInput} placeholder="Search" />
      </View>
      <TouchableOpacity>
        <ImageBackground
          source={require('../../assets/pictures/heroBg.png')}
          style={HomeStyle.heroContainer}>
          <View style={HomeStyle.heroDescriptionContainer}>
            <Text style={HomeStyle.heroDescription}>
              New Arrival change Your lifeStyle
            </Text>
            <View style={HomeStyle.heroLinkContainer}>
              <Text style={HomeStyle.heroDescriptionLink}>Check Now</Text>
              <FontAwesomeIcon
                icon={faArrowRight}
                color="white"
                size={20}
                style={HomeStyle.rightArrowIcon}
              />
            </View>
          </View>
          <Image
            style={HomeStyle.heroObject}
            source={require('../../assets/pictures/heroObject.png')}
          />
        </ImageBackground>
      </TouchableOpacity>
      <View style={HomeStyle.categoryTitle}>
        <Title title="Select Category"></Title>
      </View>
      {/* <FlatList
        horizontal={true}
        data={categorys}
        renderItem={({item}) => {
          <TouchableOpacity
            style={[
              globalStyle.button,
              item.name === whicButtonActive
                ? HomeStyle.categoryButton
                : HomeStyle.categoryButtonNotActive,
            ]}
            onPress={() => {}}>
            <Text
              style={[
                globalStyle.buttonInfo,
                item.name === whicButtonActive
                  ? HomeStyle.categoryButtonText
                  : HomeStyle.categoryButtonTextNotActive,
              ]}>
              {item.name}
            </Text>
          </TouchableOpacity>;
        }}></FlatList> */}
    </SafeAreaView>
  );
};

export default Home;
