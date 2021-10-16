import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';
import { Image, TouchableOpacity } from 'react-native';

import RegisterEmployee from '../pages/RegisterEmployee';
import Main from '../pages/Main';

import { colors } from '../styles/colors';
import { ms, s } from '../styles/dimensions';
import SelectCategory from '../pages/SelectCategory';
import FindInCategory from '../pages/FindInCategory';
import ConfirmData from '../pages/ConfirmData';
import VehicleData from '../pages/VehicleData';
import Pictures from '../pages/Pictures';
import FinishProcess from '../pages/FinishProcess';
import RegisterEmployeeSecondary from '../pages/RegisterEmployeeSecondary';

const MenuButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.dispatch(DrawerActions.openDrawer());
      }}>
      <Image source={require('../assets/menu.png')} />
    </TouchableOpacity>
  );
};

const MenuButtonBack = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{ marginRight: s(10) }}
      onPress={() => {
        navigation.goBack();
      }}>
      <Image source={require('../assets/back.png')} />
    </TouchableOpacity>
  );
};

const AppStack = createStackNavigator();

const Routes: React.FC = () => {
  return (
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
        headerRight: () => <MenuButtonBack />,
        headerTitle: () => <Image source={require('../assets/header.png')} />,
      })}>
      <AppStack.Screen name="main" component={Main} />
      <AppStack.Screen name="SelectCategory" component={SelectCategory} />
      <AppStack.Screen name="FindInCategory" component={FindInCategory} />
      <AppStack.Screen name="ConfirmData" component={ConfirmData} />
      <AppStack.Screen name="VehicleData" component={VehicleData} />
      <AppStack.Screen name="Pictures" component={Pictures} />
      <AppStack.Screen name="FinishProcess" component={FinishProcess} />
      <AppStack.Screen name="registerEmployee" component={RegisterEmployee} />
      <AppStack.Screen
        name="Fornecedor"
        component={RegisterEmployeeSecondary}
      />
      <AppStack.Screen name="Terceiros" component={RegisterEmployee} />
      <AppStack.Screen name="Operação" component={RegisterEmployee} />
    </AppStack.Navigator>
  );
};

export default Routes;
