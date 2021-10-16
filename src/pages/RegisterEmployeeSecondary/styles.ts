import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';
import { ms, s } from '../../styles/dimensions';

export const styles = StyleSheet.create({
  image: {
    alignSelf: 'flex-end',
    bottom: s(250),
    height: s(350),
    width: s(100),
  },
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: s(20),
    marginTop: s(30),
    marginBottom: s(20),
  },
  registerText: {
    fontWeight: 'bold',
    fontSize: ms(40),
    color: colors.green,
  },
  employeeText: {
    fontWeight: '600',
    fontSize: ms(20),
    color: colors.green,
  },
  containerText: {
    marginLeft: s(20),
    marginRight: s(20),
    marginBottom: s(40),
  },
  input: {
    marginBottom: s(15),
  },
  inputCargo: {
    marginBottom: s(20),
    marginRight: s(60),
  },
  matriculaCpfContent: {
    flexDirection: 'row',
  },
  marginAddPhotos: {
    marginTop: 10,
  },
  addPhotos: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  addPhotosText: {
    fontSize: ms(18),
    color: colors.green,
    marginLeft: s(5),
  },
  signUp: {
    alignItems: 'center',
  },
  inputMatricula: {
    marginBottom: s(15),
    marginRight: s(13),
  },
});
