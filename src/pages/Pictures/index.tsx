import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import ActionButton from '../../components/ActionButton';

import { styles } from './styles';

const Pictures: React.FC = ({ route, navigation }) => {
  const { type, category, idPerson, idVehicle } = route.params;
  return (
    <View style={styles.main}>
      <Text style={styles.textMain}>Imagem</Text>
      <Text style={styles.textSub}>do veiculo</Text>
      <View style={styles.row}>
        <Text style={styles.textPlacaL}>Placa: </Text>
        <Text style={styles.textPlaca}>{idVehicle.placa}</Text>
      </View>
      <TouchableOpacity style={styles.dashedView} onPress={() => {}}>
        <Image
          style={styles.cameraImage}
          source={require('../../assets/camera.png')}
        />
      </TouchableOpacity>
      <ActionButton
        active={true}
        title={'Proximo'}
        style={styles.button}
        onPress={() =>
          navigation.navigate('VehicleData', {
            type,
            category,
            idPerson,
          })
        }
      />
      <Image style={styles.image} source={require('../../assets/bro.png')} />
    </View>
  );
};

export default Pictures;
