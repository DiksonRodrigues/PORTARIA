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
    fontSize: ms(38),
    fontWeight: 'bold',
    color: colors.green,
  },
  textSub: {
    marginTop: vs(-8),
    marginLeft: s(24),
    fontSize: ms(22),
    color: colors.green,
  },
  row: {
    marginTop: vs(30),
    marginLeft: s(24),
    flexDirection: 'row',
  },
  textPlacaL: {
    fontWeight: 'bold',
    color: colors.green,
  },
  textPlaca: {
    color: colors.green,
  },
  dashedView: {
    height: vs(100),
    margin: ms(20),
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 8,
    borderColor: colors.green,
    justifyContent: 'center',
  },
  cameraImage: {
    alignSelf: 'center',
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
