import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';
import { ms, s, vs } from '../../styles/dimensions';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  textMain: {
    marginTop: vs(50),
    marginLeft: s(24),
    fontSize: ms(48),
    fontWeight: 'bold',
    color: colors.green,
  },
  textSub: {
    marginLeft: s(24),
    fontSize: ms(30),
    marginTop: vs(-10),
    marginBottom: vs(20),
    color: colors.green,
  },
  text: {
    marginLeft: s(24),
  },
  radioGroup: {
    marginLeft: s(24),
  },
  row: {
    flexDirection: 'row',
    marginLeft: s(24),
    marginVertical: vs(10),
  },
  imagePlus: {
    margin: s(3),
  },
  textAdd: {
    color: colors.green,
  },
  button: {
    position: 'absolute',
    bottom: s(100),
    alignSelf: 'center',
  },
  image: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'flex-end',
  },
});
