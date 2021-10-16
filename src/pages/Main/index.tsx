import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import ActionButton from '../../components/ActionButton';
import OperationBox from '../../components/OperationBox';

import { styles } from './styles';

const Main: React.FC = ({ navigation }) => {
  const [active, setActive] = useState(false);
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [type, setType] = useState('');

  const handleOperationBox = (value: string) => {
    if (value === 'Entrada') {
      setType(value);
      setSelected1(true);
      setSelected2(false);
    }
    if (value === 'Saida') {
      setType(value);
      setSelected1(false);
      setSelected2(true);
    }
    setActive(true);
  };

  return (
    <View style={styles.main}>
      <Text style={styles.text}>Qual o tipo de operação?</Text>
      <OperationBox
        style={styles.box}
        type={'Entrada'}
        active={selected1}
        onPress={value => {
          handleOperationBox(value);
        }}
      />
      <OperationBox
        style={styles.box}
        type={'Saida'}
        active={selected2}
        onPress={value => {
          handleOperationBox(value);
        }}
      />
      <ActionButton
        style={styles.button}
        active={active}
        title={'Proximo'}
        erro={'Selecione o tipo de operação'}
        onPress={() => {
          navigation.navigate('SelectCategory', { type: type });
        }}
      />
      <Image style={styles.image} source={require('../../assets/bro.png')} />
    </View>
  );
};

export default Main;
