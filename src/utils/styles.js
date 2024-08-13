import {scale, moderateScale, verticalScale} from 'react-native-size-matters';

const colors = {
  primary: '#1361E3',
  black: '#000000',
  white: '#FFFFFF',
  yellow: 'rgba(255, 185, 4, 1)',
  blue: '#1361E3',
  orange: 'rgba(249, 82, 4, 1)',
  violet: 'rgba(107, 30, 249, 1)',
  gray: '#EEEDEB',
};

const normalText = {
  fontFamily: 'Montserrat-Regular',
  fontSize: moderateScale(14),
  lineHeight: scale(16),
};
const italicText = {
  fontFamily: 'Montserrat-Italic',
  fontSize: moderateScale(12),
  lineHeight: scale(16),
};

const errorText = {
  fontFamily: 'Montserrat-Medium',
  fontSize: scale(10),
  lineHeight: scale(14),
};

const subHeading = {
  fontFamily: 'Montserrat-Bold',
  fontSize: moderateScale(16),
  lineHeight: scale(20),
};

const heading = {
  fontFamily: 'Montserrat-Bold',
  fontSize: scale(20),
  lineHeight: scale(28),
};

const tinyText = {
  fontFamily: 'Montserrat-Medium',
  fontSize: scale(7),
  lineHeight: verticalScale(11),
};
const headerText = {
  fontFamily: 'Montserrat-Medium',
  fontSize: scale(10),
  lineHeight: verticalScale(11),
};

export {
  normalText,
  subHeading,
  italicText,
  heading,
  errorText,
  tinyText,
  colors,
  headerText,
};
