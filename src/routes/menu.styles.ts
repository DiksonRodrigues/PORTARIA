import { StyleSheet } from 'react-native';
// import { colors } from '../styles/colors';
import { s } from '../styles/dimensions';

export const styles = StyleSheet.create({
  sideMenuContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: s(40),
  },
  menuItem: {
    paddingTop: s(20),
    paddingBottom: s(20),
  },
  sideMenuProfileIcon: {
    resizeMode: 'cover',
    width: 150,
    height: 150,
    borderWidth: 4,
    borderColor: '#C4C4C4',
    borderRadius: 150,
  },
  optionsContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingBottom: s(15),
    paddingTop: s(15),
  },
  buttonText: {
    fontSize: s(16),
  },
  avatarAndUserNameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: s(20),
  },
  userNameText: {
    color: '#6B6B6B',
    paddingTop: s(10),
    fontSize: s(18),
    textAlign: 'center',
  },
  enterpriseLogo: {
    flex: 1,
    height: 280,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
