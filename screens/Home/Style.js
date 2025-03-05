import {StyleSheet} from 'react-native';
import findFonts from '../../assets/fonts/helper/helper';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../assets/style/scaling';

const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: verticalScale(24),
    paddingHorizontal: horizontalScale(24),
    backgroundColor: '#fff',
  },
  greeting: {
    color: '#636776',
    fontFamily: findFonts('Inter', '400'),
    fontSize: fontScale(14),
  },
  headerContainer: {
    flexDirection: 'row',
  },
  heroContainer: {
    width: '100%',
    height: verticalScale(130),
    borderRadius: horizontalScale(20),
    overflow: 'hidden',
    marginTop: verticalScale(25),
  },
  heroDescription: {
    color: 'white',
    fontSize: fontScale(20),
    lineHeight: 28,
    fontFamily: findFonts('Inter', 600),
    width: '70%',
  },
  heroDescriptionContainer: {
    marginVertical: verticalScale(20),
    marginLeft: horizontalScale(20),
    display: 'flex',
    justifyContent: 'space-between',
    height: '65%',
  },
  heroDescriptionLink: {
    color: 'white',
    fontSize: 16,
    fontFamily: findFonts('Inter', 600),
    textDecorationLine: 'underline',
  },
  heroLinkContainer: {flexDirection: 'row', alignItems: 'center'},
  rightArrowIcon: {marginLeft: 5},
  heroObject: {
    position: 'absolute',
    bottom: 0,
    right: horizontalScale(-65),
    height: verticalScale(90),
    objectFit: 'contain',
  },
  categoryTitle: {
    marginTop: 20,
  },
  categoryButton: {
    paddingHorizontal: horizontalScale(25),
    paddingVertical: verticalScale(10),
    marginTop: verticalScale(20),
    marginLeft: horizontalScale(10),
  },
  categoryButtonText: {fontFamily: findFonts('Inter', 400)},
  categoryButtonNotActive: {
    backgroundColor: '#F3F5F9',
  },
  categoryButtonTextNotActive: {
    color: '#79869F',
  },
});

export default HomeStyle;
