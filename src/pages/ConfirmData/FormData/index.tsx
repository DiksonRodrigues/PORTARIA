import React, { useState } from 'react';
import { View } from 'react-native';

import TextBox from '../../../components/TextBox';

import { styles } from './styles';

const FormData: React.FC<{
  name: string;
  identify: string;
  enterprise: string;
}> = ({ name, identify, enterprise }) => {
  return (
    <View style={styles.main}>
      <TextBox title={'Nome'} value={name} />
      <TextBox title={'Empresa'} value={enterprise} />
      <TextBox title={'CPF'} value={identify} />
    </View>
  );
};

export default FormData;
