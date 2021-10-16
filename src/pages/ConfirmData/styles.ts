import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors'
import { ms, s, vs } from "../../styles/dimensions"

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
    color: colors.green
  },
  textSub: {
    marginTop: vs(-10),
    marginLeft: s(24),
    fontSize: ms(20),
    color: colors.green
  },
  text: {
    marginTop: vs(4),
    marginLeft: s(24),
    marginBottom: vs(20),
    color: colors.green
  },
  personPicture: {
    alignSelf: 'center'
  },
  button: {
    position: "absolute",
    bottom: s(100),
    alignSelf: "center"
  },
  image: {
    position: "absolute",
    bottom: 0,
    alignSelf: "flex-end"
  }
});
