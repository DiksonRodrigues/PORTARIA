import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { ms, s, vs } from '../../styles/dimensions';

export const styles = StyleSheet.create({
  border: {
    borderColor: colors.green,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    color: colors.green,
    backgroundColor: colors.white,
    position: 'absolute',
    marginTop: vs(-8),
    fontSize: ms(14),
    marginLeft: s(18),
  },
  input: {
    color: colors.grayText,
    lineHeight: ms(21),
    fontSize: ms(18),
    padding: ms(8),
  },
});
