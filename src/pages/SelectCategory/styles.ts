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
    fontSize: ms(24),
    paddingHorizontal: s(18),
    color: colors.green,
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  box: {
    margin: s(4),
  },
  button: {
    position: 'absolute',
    bottom: s(100),
    alignSelf: 'center',
  },
});
