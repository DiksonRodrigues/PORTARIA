import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import { useAuth } from '../hooks/auth';

import AuthRoutes from './auth.routes';
import MenuRoutes from './menu.routes';

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }

  return signed ? <MenuRoutes /> : <AuthRoutes />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Routes;
