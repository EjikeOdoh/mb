import {scale, moderateScale} from 'react-native-size-matters';

const colors = {
  black: '#000000',
  white: '#FFFFFF',
  yellow: 'rgba(255, 185, 4, 1)',
  blue: 'rgba(19, 175, 227, 1)',
  orange: 'rgba(249, 82, 4, 1)',
  violet: 'rgba(107, 30, 249, 1)',
};

const normalText = {
  fontFamily: 'Montserrat-Medium',
  fontSize: moderateScale(14),
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
  color: colors.black,
};

export {normalText, subHeading, heading, errorText, colors};
