import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import ActionButton from '../../../components/ActionButton';
import InputDefault from '../../../components/InputDefault';

import { styles } from './styles';

const DefaCategory: React.FC<{
  type: any;
  category: any;
  navigation: any;
}> = ({ type, category }) => {
  const [matricula, setMatricula] = useState('');
  const [cpf, setCpf] = useState('');

  const navigation = useNavigation();

  const sendForm = () => {
    if (category === 'Funcionário') {
      navigation.navigate('registerEmployee', { category });
    }

    if (category === 'Terceiros') {
      navigation.navigate('Terceiros', { category });
    }
    if (category === 'Operação') {
      navigation.navigate('Operação', { category });
    }
  };

  return (
    <View style={styles.main}>
      <InputDefault
        value={matricula}
        onChange={value => setMatricula(value)}
        title={'Matricula'}
      />
      <Text style={styles.textOU}>ou</Text>
      <InputDefault
        value={cpf}
        onChange={value => setCpf(value)}
        title={'CPF'}
      />
      <TouchableOpacity style={styles.row} onPress={sendForm}>
        <Image style={styles.image} source={require('../../../assets/+.png')} />
        <Text style={styles.text}>Novo Cadastro </Text>
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

export default DefaCategory;
