import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import ActionButton from '../../components/ActionButton';
import DefaData from './DefaData';
import FormData from './FormData';

import { styles } from './styles';

const ConfirmData: React.FC = ({ route, navigation }) => {
  const { type, category } = route.params;

  const [id] = useState('SomeID');

  const categoryChange = () => {
    if (category === 'Fornecedor') {
      return <FormData name={''} identify={''} enterprise={''} />;
    } else {
      return <DefaData name={''} identify={''} title={''} />;
    }
  };

  return (
    <View style={styles.main}>
      <Text style={styles.textMain}>Dados</Text>
      <Text style={styles.textSub}>{`Pessoais - ${category}`}</Text>
      <Text style={styles.text}>Confirmação de dados</Text>
      <View>{categoryChange()}</View>
      <Image
        style={styles.personPicture}
        source={require('../../assets/+.png')}
      />
      <ActionButton
        active={true}
        title={'Proximo'}
        style={styles.button}
        onPress={() =>
          navigation.navigate('VehicleData', {
            type: type,
            category: category,
            idPerson: id,
          })
        }
      />
      <Image style={styles.image} source={require('../../assets/bro.png')} />
    </View>
  );
};

export default ConfirmData;
