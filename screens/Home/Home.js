import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState, useEffect} from 'react';
import {
  Alert,
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
import {
  resetToInitialState,
  resetUserState,
  updateFirstName,
} from '../../redux/reducers/User';
import {updateActiveCategory} from '../../redux/reducers/Category';
import Products from '../../component/Products/Products';
import {updateItem} from '../../redux/reducers/SingleItemDonation';
import {logoutUser} from '../../API/user';

const allDonationsItems = [
  {
    name: 'Solar-powered lantern',
    description:
      'A lantern powered by solar energy, providing a sustainable and eco-friendly source of light to those in need.',
    image:
      'https://images.unsplash.com/photo-1507697364665-69eec30ea71e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80',
    donationItemId: 1,
    categoryIds: [1, 2],
    price: '1.34',
  },
  {
    name: 'School supplies kit',
    description:
      'A kit containing all the essential school supplies, such as notebooks, pencils, and erasers, for underprivileged children to help them succeed in their education.',
    image:
      'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    donationItemId: 2,
    categoryIds: [1, 3],
    price: '13.08',
  },
  {
    name: 'Warm winter coat',
    description:
      'A warm winter coat to protect people from the cold and help them stay warm during the winter months.',
    image:
      'https://images.unsplash.com/photo-1515434126000-961d90ff09db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    donationItemId: 3,
    categoryIds: [4],
    price: '11.67',
  },
  {
    name: 'Household cleaning supplies',
    description:
      'Household cleaning supplies, such as soap, sponges, and disinfectant, to help people maintain a clean and healthy living environment.',
    image:
      'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    donationItemId: 4,
    categoryIds: [1, 5],
    price: '3.66',
  },
  {
    name: 'Laptops for students',
    description:
      'Laptops for underprivileged students to help them access technology and participate in virtual learning.',
    image:
      'https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    donationItemId: 5,
    categoryIds: [6, 3],
    price: '15.76',
  },
  {
    name: 'Board games',
    description:
      'Board games for families and children to play and enjoy together, promoting social interaction and entertainment.',
    image:
      'https://images.unsplash.com/photo-1632501641765-e568d28b0015?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    donationItemId: 6,
    categoryIds: [7],
    price: '1.40',
  },
  {
    name: 'Basketballs',
    description:
      'Basketballs for children to play and stay active, promoting physical fitness and exercise.',
    image:
      'https://images.unsplash.com/photo-1494199505258-5f95387f933c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80',
    donationItemId: 7,
    categoryIds: [8],
    price: '12.53',
  },
  {
    name: "Children's books",
    description:
      'Children’s books to promote literacy and encourage a love for reading in young children.',
    image:
      'https://plus.unsplash.com/premium_photo-1661714264890-002b648f816c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80',
    donationItemId: 8,
    categoryIds: [1, 9],
    price: '14.81',
  },
  {
    name: 'Hygiene kit',
    description:
      'A hygiene kit containing essential items such as toothbrushes, toothpaste, and soap to help people maintain personal hygiene and health.',
    image:
      'https://images.unsplash.com/photo-1583947581924-860bda6a26df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1767&q=80',
    donationItemId: 9,
    categoryIds: [10],
    price: '14.17',
  },
  {
    name: 'Office furniture',
    description:
      'Office furniture such as desks, chairs, and filing cabinets for non-profit organizations to create a functional and efficient work environment.',
    image:
      'https://images.unsplash.com/photo-1520032525096-7bd04a94b5a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80',
    donationItemId: 10,
    categoryIds: [11],
    price: '3.17',
  },
  {
    name: 'Power tools',
    description:
      'Power tools such as drills and saws for people in need to complete home improvement projects and repairs.',
    image:
      'https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    donationItemId: 11,
    categoryIds: [1, 12],
    price: '4.68',
  },
  {
    name: 'Art supplies',
    description:
      'Art supplies, such as paints, brushes, and canvas, for people to express their creativity and participate in art activities.',
    image:
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80',
    donationItemId: 12,
    categoryIds: [13],
    price: '16.95',
  },
  {
    name: 'Eco-friendly water bottles',
    description:
      'Eco-friendly water bottles made from reusable materials to reduce waste and promote sustainability.',
    image:
      'https://images.unsplash.com/photo-1605274280925-9dd1baacb97b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    donationItemId: 13,
    categoryIds: [2],
    price: '18.67',
  },
  {
    name: 'Sporting equipment',
    description:
      'Sporting equipment, such as soccer balls and basketballs, for children to play and stay active, promoting physical fitness and exercise.',
    image:
      'https://plus.unsplash.com/premium_photo-1664302183949-0bdc2b38286e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    donationItemId: 14,
    categoryIds: [1, 8],
    price: '3.99',
  },
  {
    name: 'Music instruments',
    description:
      'Music instruments, such as guitars and keyboards, for people to learn and enjoy playing music.',
    image:
      'https://images.unsplash.com/photo-1462965326201-d02e4f455804?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    donationItemId: 15,
    categoryIds: [2],
    price: '18.71',
  },
  {
    name: 'Blankets',
    description:
      'Blankets to provide warmth and comfort to those in need, especially during cold weather.',
    image:
      'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    donationItemId: 16,
    categoryIds: [4],
    price: '7.87',
  },
  {
    name: 'Non-perishable food',
    description:
      'Non-perishable food, such as canned goods and rice, to provide essential sustenance to those in need.',
    image:
      'https://media.istockphoto.com/id/498405596/photo/please-support-our-food-drive-holiday-canned-food-drive.jpg?s=1024x1024&w=is&k=20&c=i2gDVlGn_hiZ8R1ABwAtT_qpnyPALcyQy_7EE1shQb4=',
    donationItemId: 17,
    categoryIds: [1, 5],
    price: '11.64',
  },
  {
    name: 'First aid supplies',
    description:
      'First aid supplies, such as bandages and antiseptic wipes, to help people treat minor injuries and maintain basic health and safety.',
    image:
      'https://images.unsplash.com/photo-1603398938378-e54eab446dde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    donationItemId: 18,
    categoryIds: [10],
    price: '11.50',
  },
];

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

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  const whichCategoryActive = useSelector(state => state.category);
  const user = useSelector(state => state.user);
  console.log(user);

  const [donationItems, setDonationItems] = useState([]);

  const categoryPerPage = 3;
  const [currentPage, setcurrentPage] = useState(0);
  const [renderedCategories, setrenderedCategories] = useState();

  useEffect(() => {
    const filteredItems = allDonationsItems.filter(item => {
      return item.categoryIds.includes(whichCategoryActive.categoryId);
    });

    setDonationItems(filteredItems);
  }, [whichCategoryActive]);

  useEffect(() => {
    const dataToAppend = appendedData(categories, 1, categoryPerPage);

    if (dataToAppend.length > 0) {
      setrenderedCategories(dataToAppend);
      setcurrentPage(2);
    }
  }, []);

  // const renderedCategories = useSelector(state => state.category);

  return (
    <SafeAreaView style={globalStyle.whiteBg}>
      <ScrollView style={HomeStyle.container}>
        <View style={HomeStyle.headerContainer}>
          <View>
            <Text style={HomeStyle.greeting}>Hello,</Text>
            <Title title={`${user.displayName} `} />
          </View>
          <View style={globalStyle.profileImageContainer}>
            <Image
              source={require('../../assets/pictures/profile.png')}
              style={globalStyle.profileImage}
            />
            <TouchableOpacity
              onPress={async () => {
                dispatch(resetUserState());
                const response = await logoutUser();
                response.error
                  ? Alert.alert('Logout Failed', 'Logout failed!')
                  : '';
              }}>
              <Text style={globalStyle.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={globalStyle.searchInputContainer}>
          <TouchableOpacity
            onPress={() => {
              console.log(user);
            }}>
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
                  const filteredItems = allDonationsItems.filter(item => {
                    return item.categoryIds.includes(
                      whichCategoryActive.categoryId,
                    );
                  });

                  setDonationItems(filteredItems);

                  return dispatch(updateActiveCategory(item));
                }}
                index={index}
                whichButtonActive={whichCategoryActive}
                item={item}
              />
            );
          }}></FlatList>
        <View horizontal={true} style={HomeStyle.donationProductContainer}>
          {donationItems.map(item => (
            <Products
              onPress={() => {
                navigation.navigate('Donate', item);
                dispatch(updateItem(item));
              }}
              key={item.donationItemId}
              name={item.name}
              category={whichCategoryActive.name}
              pictureUrl={item.image}
              price={item.price}
            />
          ))}
        </View>
        <View style={{height: 40}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
