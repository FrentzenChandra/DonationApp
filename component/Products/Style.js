import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  verticalScale,
  fontScale,
} from '../../assets/style/scaling';
import findFonts from '../../assets/fonts/helper/helper';
import {width} from '@fortawesome/free-solid-svg-icons/faMugSaucer';

const style = StyleSheet.create({
  donationItemsContainer: {
    marginHorizontal: 2,
    width: '44%',
  },
  donationProductPicture: {
    width: horizontalScale(140),
    height: horizontalScale(155),
    borderRadius: horizontalScale(20),
    overflow: 'hidden',
    marginBottom: verticalScale(10),
    backgroundColor: 'grey',
  },
  donationProductCategory: {
    backgroundColor: '#145855',
    marginTop: verticalScale(13),
    marginLeft: horizontalScale(10),
    width: '50%',
    paddingHorizontal: horizontalScale(3),
    paddingVertical: verticalScale(3),
    borderRadius: horizontalScale(20),
  },
  badgeText: {
    textAlign: 'center',
    fontFamily: findFonts('Inter', 400),
    color: '#fff',
    fontSize: fontScale(10),
  },

  donationProductCategoryName: {
    marginLeft: 5,
    fontSize: 20,
    fontFamily: findFonts('Inter', 600),
  },
});

export default style;
