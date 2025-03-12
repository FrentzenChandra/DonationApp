import {StyleSheet} from 'react-native';
import findFonts from '../../assets/fonts/helper/helper';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../assets/style/scaling';
import {height, width} from '@fortawesome/free-solid-svg-icons/faMugSaucer';

const HomeStyle = StyleSheet.create({
  container: {
    paddingTop: verticalScale(24),
    paddingHorizontal: horizontalScale(24),
    backgroundColor: '#fff',
    flex: 1,
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
    marginTop: verticalScale(15),
  },
  categoryButtonContainer: {
    flexGrow: 1,
    overflow: 'visible',
  },
  categoryButton: {
    paddingHorizontal: horizontalScale(25),
    marginTop: verticalScale(20),
    marginLeft: horizontalScale(10),
    backgroundColor: '#2979F2',
    height: verticalScale(40),
    borderRadius: horizontalScale(40),
    marginBottom: 0,
    justifyContent: 'center',
  },
  categoryButtonText: {
    fontFamily: findFonts('Inter', 400),
    color: '#fff',
    fontSize: fontScale(16),
    textAlign: 'center',
  },
  categoryButtonNotActive: {
    backgroundColor: '#F3F5F9',
  },
  categoryButtonTextNotActive: {
    color: '#79869F',
  },
  donationProductContainer: {
    marginTop: verticalScale(30),
    flexWrap: 'wrap',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HomeStyle;
