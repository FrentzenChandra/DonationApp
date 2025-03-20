import {StyleSheet} from 'react-native';
import findFonts from '../fonts/helper/helper';
import {fontScale, horizontalScale, verticalScale} from './scaling';
import {height, width} from '@fortawesome/free-solid-svg-icons/faMugSaucer';

const globalStyle = StyleSheet.create({
  whiteBg: {flex: 1, backgroundColor: '#fff'},
  loading: {
    position: 'absolute',
    alignSelf: 'center',
    color: '#DE0f3f',
    top: '50%',
  },
  input: {
    color: '#022150',
    fontFamily: findFonts('Inter', '500'),
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontSize: fontScale(16),
    paddingHorizontal: 0,
    height: verticalScale(40),
    paddingVertical: verticalScale(2),
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
    height: verticalScale(40),
    paddingVertical: verticalScale(2),
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
    marginTop: verticalScale(20),
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
  profileImageContainer: {
    marginLeft: 'auto',
    textAlign: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: horizontalScale(50),
    height: horizontalScale(50),
    borderRadius: width,
  },
  logoutText: {
    color: '#156CF7',
    fontFamily: findFonts('Inter', 600),
    fontSize: fontScale(18),
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
  errorMessage: {
    color: 'red',
    alignSelf: 'center',
    marginTop: verticalScale(20),
    fontFamily: findFonts('Inter', 700),
    fontSize: fontScale(15),
  },
  errorMessageInput: {
    color: 'red',
    alignSelf: 'center',
    marginTop: verticalScale(2),
    fontFamily: findFonts('Inter', 500),
    fontSize: fontScale(15),
  },
});

export default globalStyle;
