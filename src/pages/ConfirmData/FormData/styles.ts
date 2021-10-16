import { StyleSheet } from 'react-native';

import { colors } from '../../../styles/colors'
import { ms, s, vs } from "../../../styles/dimensions"

export const styles = StyleSheet.create({
  main: {
    padding: s(18),
  },
  row: {
    flexDirection: 'row',
    marginVertical: vs(8)
  },
  image: {
    margin: s(3)
  },
  text: {
    color: colors.green
  },
  button: {
    alignSelf: 'center'
  }
});
