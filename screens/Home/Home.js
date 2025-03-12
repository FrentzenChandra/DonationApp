import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState, useEffect} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import {resetToInitialState, updateFirstName} from '../../redux/reducers/User';
import {updateActiveCategory} from '../../redux/reducers/Category';
import Products from '../../component/Products/Products';

const categories = [
  {
    categoryId: 1,
    name: 'Highlight',
  },
  {
    categoryId: 2,
    name: 'Environment',
  },
  {
    categoryId: 3,
    name: 'Education',
  },
  {
    categoryId: 4,
    name: 'Clothing and Accessories',
  },
  {
    categoryId: 5,
    name: 'Household goods',
  },
  {
    categoryId: 6,
    name: 'Electronics',
  },
  {
    categoryId: 7,
    name: 'Toys and Games',
  },
  {
    categoryId: 8,
    name: 'Sports Equipment',
  },
  {
    categoryId: 9,
    name: 'Books and Media',
  },
  {
    categoryId: 10,
    name: 'Health and Beauty Products',
  },
  {
    categoryId: 11,
    name: 'Office supplies',
  },
  {
    categoryId: 12,
    name: 'Tools and Hardware',
  },
  {
    categoryId: 13,
    name: 'Art and Craft Supplies',
  },
];

const appendedData = (data, currentPage, qtyPerPage) => {
  const endIndex = currentPage * qtyPerPage;
  const startIndex = endIndex - qtyPerPage;
  const dataToAppend = data.slice(startIndex, endIndex);

  if (endIndex > data.length) {
    return [];
  }

  if (dataToAppend.length > 0) {
    return dataToAppend;
  }
};

const CategoryButton = ({whichButtonActive, item, index, onPress}) => {
  const isActive = whichButtonActive.name == item.name;
  return (
    <TouchableOpacity
      style={[
        HomeStyle.categoryButton,
        index == 0 ? {marginLeft: 0} : {},
        isActive ? {} : HomeStyle.categoryButtonNotActive,
      ]}
      onPress={onPress}>
      <Text
        style={[
          HomeStyle.categoryButtonText,
          isActive ? {} : HomeStyle.categoryButtonTextNotActive,
        ]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

const Home = () => {
  const items = useSelector(state => state.items);
  const whichCategoryActive = useSelector(state => state.category);

  const categoryPerPage = 3;
  const [currentPage, setcurrentPage] = useState(0);

  const [renderedCategories, setrenderedCategories] = useState();

  useEffect(() => {
    const filteredItems = items.filter(item => {
      return item.categoryIds.includes(whichCategoryActive.categoryId);
    });

    console.log(filteredItems);
  }, [items, whichCategoryActive]);

  useEffect(() => {
    const dataToAppend = appendedData(categories, 1, categoryPerPage);

    if (dataToAppend.length > 0) {
      setrenderedCategories(dataToAppend);
      setcurrentPage(2);
    }
  }, []);

  // const renderedCategories = useSelector(state => state.category);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={globalStyle.whiteBg}>
      <ScrollView style={HomeStyle.container}>
        <View style={HomeStyle.headerContainer}>
          <View>
            <Text style={HomeStyle.greeting}>Hello,</Text>
            <Title title={`${user.firstName} ${user.lastName}`} />
          </View>
          <Image
            source={require('../../assets/pictures/profile.png')}
            style={globalStyle.profileImage}></Image>
        </View>
        <View style={globalStyle.searchInputContainer}>
          <TouchableOpacity
            onPress={() =>
              dispatch(updateFirstName({firstName: 'ACEN SANJAYA'}))
            }>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size={horizontalScale(22)}
              color="#25C0FF"
            />
          </TouchableOpacity>
          <TextInput style={globalStyle.searchInput} placeholder="Search" />
        </View>
        <TouchableOpacity onPress={() => dispatch(resetToInitialState())}>
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
        <FlatList
          style={HomeStyle.categoryButtonContainer}
          horizontal={true}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          data={renderedCategories}
          onEndReachedThreshold={0.7}
          onEndReached={() => {
            const dataToAppend = appendedData(
              categories,
              currentPage,
              categoryPerPage,
            );

            if (dataToAppend.length > 0) {
              setrenderedCategories([...renderedCategories, ...dataToAppend]);
              setcurrentPage(currentPage + 1);
            }
          }}
          renderItem={({item, index}) => {
            return (
              <CategoryButton
                onPress={() => {
                  dispatch(updateActiveCategory(item));
                  console.log(whichCategoryActive);
                }}
                index={index}
                whichButtonActive={whichCategoryActive}
                item={item}
              />
            );
          }}></FlatList>
        <View horizontal={true} style={HomeStyle.donationProductContainer}>
          {items.map(item => {
            return (
              <Products
                key={item.donationItemId}
                name={item.name}
                category={whichCategoryActive.name}
                pictureUrl={item.image}
                price={item.price}
              />
            );
          })}
        </View>
        <View style={{height: 40}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
