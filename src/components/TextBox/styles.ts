import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors"
import { ms, s, vs } from "../../styles/dimensions"

export const styles = StyleSheet.create({
  border: {
    borderColor: colors.green,
    backgroundColor: colors.white,
    flexDirection: 'row',
    width: s(280),
    borderWidth: 1,
    borderRadius: 10,
    margin: ms(2),
  },
  textTitle: {
    color: colors.grayText,
    lineHeight: ms(21),
    fontSize: ms(18),
    paddingVertical: ms(8),
    marginLeft: s(8),
    fontWeight: 'bold',
  },
  textValue: {
    color: colors.grayText,
    lineHeight: ms(21),
    fontSize: ms(18),
    paddingVertical: ms(8),
  },
});