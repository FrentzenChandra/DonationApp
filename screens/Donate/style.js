import {StyleSheet} from 'react-native';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../assets/style/scaling';
import findFonts from '../../assets/fonts/helper/helper';
import {height} from '@fortawesome/free-solid-svg-icons/faMugSaucer';

const donateStyle = StyleSheet.create({
  backIconContainer: {
    backgroundColor: '#F7F7F7',
    marginTop: verticalScale(30),
    marginLeft: horizontalScale(40),
    padding: horizontalScale(4),
    borderRadius: horizontalScale(30),
    width: horizontalScale(30),
    height: horizontalScale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: horizontalScale(280),
    height: verticalScale(240),
    borderRadius: horizontalScale(5),
    backgroundColor: 'red',
    marginTop: verticalScale(12),
    alignSelf: 'center',
  },
  donationProductCategory: {
    backgroundColor: '#145855',
    marginTop: verticalScale(13),
    width: horizontalScale(90),
    paddingHorizontal: horizontalScale(3),
    paddingVertical: verticalScale(3),
    borderRadius: horizontalScale(20),
    marginLeft: horizontalScale(35),
  },
  badgeText: {
    textAlign: 'center',
    fontFamily: findFonts('Inter', 600),
    color: '#fff',
    fontSize: fontScale(14),
  },
  title: {
    marginTop: verticalScale(5),
    marginLeft: horizontalScale(37),
    color: 'black',
    fontFamily: findFonts('Inter', 600),
    fontSize: fontScale(24),
  },
  description: {
    marginTop: verticalScale(5),
    marginHorizontal: horizontalScale(37),
    color: 'black',
    fontFamily: findFonts('Inter', 400),
    fontSize: fontScale(16),
    textAlign: 'justify',
    lineHeight: fontScale(22),
  },
  button: {
    width: '80%',
    height: verticalScale(40),
    backgroundColor: '#2979F2',
    justifyContent: 'center',
    position: 'absolute',
    bottom: verticalScale(40),
    alignSelf: 'center',
    borderRadius: height,
  },
  buttonInfo: {
    color: '#fff',
    fontFamily: findFonts('Inter', '600'),
    fontSize: fontScale(16),
    textAlign: 'center',
  },
});

export default donateStyle;
