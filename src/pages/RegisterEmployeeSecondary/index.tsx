import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import ActionButton from '../../components/ActionButton';
import InputDefault from '../../components/InputDefault';
import { styles } from './styles';

type ParamList = {
  Detail: {
    category: string;
  };
};

const RegisterEmployeeSecondary: React.FC = () => {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [nomeCaracha, setNomeCaracha] = useState('');
  const [cargo, setCargo] = useState('');
  const [cpf, setCPF] = useState('');

  const route = useRoute<RouteProp<ParamList, 'Detail'>>();

  const addPictures = () => {};

  const addFolders = () => {};

  const register = () => {};

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.registerText}>Cadastro</Text>
        <Text style={styles.employeeText}>de {route.params.category}</Text>
      </View>
      <View style={styles.containerText}>
        <InputDefault
          style={styles.input}
          title="Nome Completo"
          value={nomeCompleto}
          onChange={setNomeCompleto}
        />
        <InputDefault
          style={styles.input}
          title="Empresa"
          value={nomeCaracha}
          onChange={setNomeCaracha}
        />
        <InputDefault
          style={styles.input}
          title="CPF"
          value={cpf}
          onChange={setCPF}
        />
        <InputDefault
          style={styles.inputCargo}
          title="Cargo"
          value={cargo}
          onChange={setCargo}
        />
        <TouchableOpacity style={styles.addPhotos} onPress={() => addPictures}>
          <Image source={require('../../assets/plusCircle/plus.png')} />
          <Text style={styles.addPhotosText}>Adicionar Fotos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.addPhotos, styles.marginAddPhotos]}
          onPress={() => addFolders}>
          <Image source={require('../../assets/plusCircle/plus.png')} />
          <Text style={styles.addPhotosText}>Fotos do Documento</Text>
        </TouchableOpacity>
      </View>
      <ActionButton
        style={styles.signUp}
        title="Cadastrar"
        onPress={() => register}
        active
      />
      <Image
        style={styles.image}
        source={require('../../assets/bro.png')}
        resizeMode="contain"
      />
    </View>
  );
};

export default RegisterEmployeeSecondary;
