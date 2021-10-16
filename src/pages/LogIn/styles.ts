import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';
import { ms, s, vs } from '../../styles/dimensions';

export const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  logo: {
    marginTop: ms(60),
    marginBottom: ms(60),
  },
  title: {
    marginTop: vs(30),
    marginBottom: vs(100),
    color: colors.green,
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  box: {
    marginTop: vs(10),
    marginBottom: vs(10),
    flexDirection: 'row',
    borderRadius: 10,
    width: s(300),
    height: vs(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grayLabel,
  },
  input: {
    width: s(250),
    padding: s(10),
    color: colors.grayText,
    textDecorationColor: colors.grayText,
  },
  image: {
    alignSelf: 'center',
    marginTop: s(15),
  },
  radioButton: {
    alignSelf: 'flex-start',
    marginBottom: s(25),
    marginLeft: s(42),
  },
});
