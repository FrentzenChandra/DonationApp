import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/style/scaling';
import findFonts from '../../assets/fonts/helper/helper';

const Loginstyle = StyleSheet.create({
  container: {
    marginTop: verticalScale(163),
    marginHorizontal: horizontalScale(25),
  },
  signInText: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 24,
    color: '#156CF7',
    fontFamily: findFonts('Inter', '500'),
  },
});

export default Loginstyle;
