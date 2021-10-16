import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { ms, s, vs } from '../../styles/dimensions';

export const styles = StyleSheet.create({
  box: {
    borderRadius: 10,
    width: s(110),
    height: vs(35),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: ms(18),
  },
});
