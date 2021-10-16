import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import ActionButton from '../../components/ActionButton';
import { RadioGroup } from '../../components/Radio';

import { styles } from './styles';

const radioButtonsData = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Option 1',
    value: 'option1',
  },
  {
    id: '2',
    label: 'Option 2',
    value: 'option2',
  },
];

const VehicleData: React.FC = ({ route, navigation }) => {
  const { type, category, idPerson } = route.params;
  const [data, setData] = useState([0]);
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const [id, setId] = useState('Id do Veiculo');

  const onPressRadioButton = radioButtonsArray => {
    setRadioButtons(radioButtonsArray);
    console.log(radioButtonsArray);
  };

  return (
    <View style={styles.main}>
      <Text style={styles.textMain}>Dados</Text>
      <Text style={styles.textSub}>do veiculo</Text>
      <View>
        {data.length > 0 ? (
          <View>
            <Text style={styles.text}>Veículos Cadastrados:</Text>
            <RadioGroup
              style={styles.radioGroup}
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
            />
          </View>
        ) : null}
      </View>
      <View>
        <TouchableOpacity style={styles.row}>
          <Image
            style={styles.imagePlus}
            source={require('../../assets/+.png')}
          />
          <Text style={styles.textAdd}>Novo Cadastro</Text>
        </TouchableOpacity>
      </View>
      <ActionButton
        active={true}
        title={'Proximo'}
        style={styles.button}
        onPress={() =>
          navigation.navigate('Pictures', {
            type: type,
            category: category,
            idPerson: idPerson,
            idVehicle: id,
          })
        }
      />
      <Image style={styles.image} source={require('../../assets/bro.png')} />
    </View>
  );
};

export default VehicleData;
