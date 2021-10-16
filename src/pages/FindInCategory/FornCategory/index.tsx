import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import ActionButton from '../../../components/ActionButton';
import InputDefault from '../../../components/InputDefault';

import { styles } from './styles';

const FormCategory: React.FC<{
  type: any;
  category: string;
  navigation: any;
}> = ({ type, category }) => {
  const [value, setValue] = useState('');

  const navigation = useNavigation();

  const sendForm = () => {
    if (category === 'Fornecedor') {
      navigation.navigate('Fornecedor', { category });
    }
  };

  return (
    <View style={styles.main}>
      <InputDefault value={value} onChange={() => setValue} title={'CPF'} />
      <TouchableOpacity style={styles.row} onPress={sendForm}>
        <Image style={styles.image} source={require('../../../assets/+.png')} />
        <Text style={styles.text}>Novo Cadastro</Text>
      </TouchableOpacity>
      <ActionButton
        active={true}
        title={'Consulta'}
        style={styles.button}
        onPress={() => {
          navigation.navigate('ConfirmData', {
            type: type,
            category: category,
          });
        }}
      />
    </View>
  );
};

export default FormCategory;
