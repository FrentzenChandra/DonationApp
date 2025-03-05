import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/style/scaling';
import findFonts from '../../assets/fonts/helper/helper';

const SignInStyle = StyleSheet.create({
  container: {
    marginTop: verticalScale(110),
    marginHorizontal: horizontalScale(25),
  },
  signInText: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: verticalScale(24),
    color: '#156CF7',
    fontFamily: findFonts('Inter', '500'),
  },
});

export default SignInStyle;
