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
    fontSize: ms(36),
    fontWeight: 'bold',
    color: colors.green,
  },
  textSub: {
    marginTop: vs(-10),
    marginLeft: s(24),
    fontSize: ms(20),
    marginBottom: vs(50),
    color: colors.green,
  },
  box: {
    width: s(260),
    margin: s(10),
    backgroundColor: colors.white,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#444',
    shadowOpacity: 0.26,
    shadowRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },
  image: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'flex-end',
  },
});
