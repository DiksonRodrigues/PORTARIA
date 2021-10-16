import React from 'react';
import { Image, Text, View } from 'react-native';
import FormCategory from './FornCategory';
import DefaCategory from './DefaCategory';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

import { styles } from './styles';

type ParamList = {
  Detail: {
    category: string;
    type: string;
  };
};

const FindInCategory: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, 'Detail'>>();

  const { type, category } = route.params;

  const categoryChange = () => {
    if (category === 'Fornecedor') {
      return (
        <FormCategory type={type} category={category} navigation={navigation} />
      );
    } else {
      return (
        <DefaCategory type={type} category={category} navigation={navigation} />
      );
    }
  };

  return (
    <View style={styles.main}>
      <Text style={styles.textMain}>Consulta</Text>
      <Text style={styles.textSub}>{`de ${category}`}</Text>
      <View style={styles.box}>{categoryChange()}</View>
      <Image style={styles.image} source={require('../../assets/bro.png')} />
    </View>
  );
};

export default FindInCategory;
