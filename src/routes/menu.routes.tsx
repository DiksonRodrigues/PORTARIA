import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import MainRoutes from './main.routes';
import RegisterRoutes from './register.routes';
import { useAuth } from '../hooks/auth';
import { colors } from '../styles/colors';
import { styles } from './menu.styles';

const CustomDrawerContent = (props: any) => {
  const { signOut } = useAuth();

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.sideMenuContainer}>
        <View style={styles.avatarAndUserNameContainer}>
          <Image
            source={{
              uri: 'https://images.wallpaperscraft.com/image/astronaut_art_space_129529_1080x1920.jpg',
            }}
            style={styles.sideMenuProfileIcon}
          />
          <Text style={styles.userNameText}>Nome do funcionário</Text>
        </View>
        <View style={styles.optionsContent}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate('main')}>
            <Text style={styles.buttonText}>Início</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate('registerEmployee')}>
            <Text style={styles.buttonText}>Cadastro de Colaboradores</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate('registerEvents')}>
            <Text style={styles.buttonText}>Registro de Eventos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => signOut()}>
            <Text style={styles.buttonText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.enterpriseLogo}>
        <Image
          source={require('../assets/enterpriseLogo/enterpriseLogo.png')}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();

const MyDrawer: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerContentOptions={{ activeTintColor: colors.green }}>
      <Drawer.Screen
        name="Main"
        component={MainRoutes}
        options={{ drawerLabel: 'Início' }}
      />
      <Drawer.Screen
        name="Register"
        component={RegisterRoutes}
        options={{ drawerLabel: 'Cadastro' }}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
