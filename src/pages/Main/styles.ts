import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';
import { ms, s, vs } from '../../styles/dimensions';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  text: {
    margin: s(24),
    marginVertical: vs(50),
    fontSize: ms(36),
    color: colors.green,
  },
  box: {
    alignSelf: 'center',
    margin: s(10),
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
