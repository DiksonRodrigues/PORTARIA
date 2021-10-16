import React, { useState } from 'react';
import { View } from 'react-native';
import TextBox from '../../../components/TextBox';

import { styles } from './styles';

const DefaData: React.FC<{
  name: string;
  identify: string;
  title: string;
}> = ({ name, identify, title }) => {
  return (
    <View style={styles.main}>
      <TextBox title={'Nome'} value={name} />
      <TextBox title={'Matricula/CPF'} value={identify} />
      <TextBox title={'Cargo'} value={title} />
    </View>
  );
};

export default DefaData;
