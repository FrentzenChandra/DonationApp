import {StyleSheet} from 'react-native';
import findFonts from '../fonts/helper/helper';
import {fontScale, horizontalScale, verticalScale} from './scaling';
import {height, width} from '@fortawesome/free-solid-svg-icons/faMugSaucer';

const globalStyle = StyleSheet.create({
  whiteBg: {flex: 1, backgroundColor: '#fff'},
  input: {
    color: '#022150',
    fontFamily: findFonts('Inter', '500'),
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontSize: fontScale(16),
    paddingHorizontal: 0,
    height: verticalScale(32),
  },
  inputInfo: {
    color: '#36455A',
    fontFamily: findFonts('Inter', '500'),
    fontSize: fontScale(12),
    marginTop: verticalScale(24),
  },
  passwordInput: {
    color: '#022150',
    fontFamily: findFonts('Inter', '500'),
    fontSize: fontScale(16),
    paddingHorizontal: 0,
    width: '90%',
    height: verticalScale(32),
  },
  passwordInputContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  passwordInputIcon: {
    alignSelf: 'center',
    marginLeft: 'auto',
  },
  button: {
    marginTop: verticalScale(40),
    width: '100%',
    height: verticalScale(40),
    backgroundColor: '#2979F2',
    borderRadius: height,
    justifyContent: 'center',
  },
  buttonInfo: {
    color: '#fff',
    fontFamily: findFonts('Inter', '600'),
    fontSize: fontScale(16),
    textAlign: 'center',
  },
  backButton: {
    marginLeft: horizontalScale(20),
    marginTop: verticalScale(20),
  },
  profileImage: {
    width: horizontalScale(50),
    height: horizontalScale(50),
    borderRadius: width,
    marginLeft: 'auto',
  },
  searchInputContainer: {
    marginTop: verticalScale(20),
    backgroundColor: '#F3F5F9',
    width: '100%',
    height: verticalScale(40),
    borderRadius: height,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(16),
  },
  searchInput: {
    marginLeft: horizontalScale(4),
    width: '100%',
    color: 'black',
    fontFamily: findFonts('Inter', '400'),
    fontSize: 16,
  },
});

export default globalStyle;
