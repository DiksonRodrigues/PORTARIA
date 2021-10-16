import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';

import Main from '../pages/Main';

import { colors } from '../styles/colors';
import { ms } from '../styles/dimensions';

const MenuButton = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}>
        <Image source={require('../assets/menu.png')} />
      </TouchableOpacity>
    </View>
  );
};

const AppStack = createStackNavigator();

const Routes: React.FC = () => (
  <AppStack.Navigator
    screenOptions={() => ({
      headerStyle: {
        backgroundColor: colors.green,
        borderRadius: 8,
      },
      headerTintColor: colors.white,
      headerLeft: () => <MenuButton />,
      headerLeftContainerStyle: {
        margin: ms(8),
      },
      headerTitle: () => <Image source={require('../assets/header.png')} />,
    })}>
    <AppStack.Screen name="Main" component={Main} />
  </AppStack.Navigator>
);

export default Routes;
