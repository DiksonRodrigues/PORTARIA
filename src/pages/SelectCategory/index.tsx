import React, { useState } from 'react';
import { Text, View } from 'react-native';

import ActionButton from '../../components/ActionButton';
import OperationBox from '../../components/OperationBox';

import { styles } from './styles';

const SelectCategory: React.FC = ({ route, navigation }) => {
  const { type } = route.params;
  const [active, setActive] = useState(false);
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const [selected4, setSelected4] = useState(false);
  const [category, setCategory] = useState('');

  const handleOperationBox = (value: string) => {
    if (value === 'Funcionário') {
      setCategory(value);
      setSelected1(true);
      setSelected2(false);
      setSelected3(false);
      setSelected4(false);
    }
    if (value === 'Fornecedor') {
      setCategory(value);
      setSelected1(false);
      setSelected2(true);
      setSelected3(false);
      setSelected4(false);
    }
    if (value === 'Terceiros') {
      setCategory(value);
      setSelected1(false);
      setSelected2(false);
      setSelected3(true);
      setSelected4(false);
    }
    if (value === 'Operação') {
      setCategory(value);
      setSelected1(false);
      setSelected2(false);
      setSelected3(false);
      setSelected4(true);
    }
    setActive(true);
  };
  return (
    <View style={styles.main}>
      <Text style={styles.text}>
        Para qual das categorias abaixo você deseja registrar eventos?
      </Text>
      <View style={styles.row}>
        <OperationBox
          style={styles.box}
          type={'Funcionário'}
          active={selected1}
          onPress={value => {
            handleOperationBox(value);
          }}
        />
        <OperationBox
          style={styles.box}
          type={'Fornecedor'}
          active={selected2}
          onPress={value => {
            handleOperationBox(value);
          }}
        />
      </View>
      <View style={styles.row}>
        <OperationBox
          style={styles.box}
          type={'Terceiros'}
          active={selected3}
          onPress={value => {
            handleOperationBox(value);
          }}
        />
        <OperationBox
          style={styles.box}
          type={'Operação'}
          active={selected4}
          onPress={value => {
            handleOperationBox(value);
          }}
        />
      </View>
      <ActionButton
        style={styles.button}
        active={active}
        title={'Proximo'}
        erro={'Selecione a categoria'}
        onPress={() => {
          navigation.navigate('FindInCategory', {
            type: type,
            category: category,
          });
        }}
      />
    </View>
  );
};

export default SelectCategory;
