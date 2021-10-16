import React, { useState } from 'react';
import { Image, Platform, TextInput, View } from 'react-native';
import { RadioButton } from '../../components/Radio';
import ActionButton from '../../components/ActionButton';
import { useAuth } from '../../hooks/auth';

import { styles } from './styles';
import { colors } from '../../styles/colors';

const LogIn: React.FC = () => {
  const { signIn } = useAuth();
  const [active, setActive] = useState(false);
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setSelection] = useState(false);

  const cpfMask = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  };

  const handleTextChange = () => {
    console.log('Leng', cpf.length, password.length);
    if (cpf.length >= 13 && password.length >= 3) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const handleSignIn = () => {
    signIn({
      cpf: cpf,
      senha: password,
    });
  };

  return (
    <View style={styles.main}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo.png')}
        resizeMode="contain"
      />
      <View style={styles.box}>
        <Image source={require('../../assets/userLoginIcon.png')} />
        <TextInput
          style={styles.input}
          placeholder={'CPF'}
          maxLength={14}
          value={cpf}
          onChangeText={value => {
            setCpf(cpfMask(value));
            handleTextChange();
          }}
          keyboardType={
            Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'number-pad'
          }
        />
      </View>
      <View style={styles.box}>
        <Image source={require('../../assets/passwordLoginIcon.png')} />
        <TextInput
          style={styles.input}
          placeholder={'Senha'}
          maxLength={4}
          value={password}
          secureTextEntry={true}
          onChangeText={value => {
            setPassword(value);
            handleTextChange();
          }}
          keyboardType={
            Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'number-pad'
          }
        />
      </View>

      <RadioButton
        id="remember-password"
        internalSize="full"
        color={colors.green}
        borderColor={colors.green}
        containerStyle={styles.radioButton}
        label="Lembrar senha"
        selected={isSelected}
        onPress={() => setSelection(!isSelected)}
        size={16}
      />

      <ActionButton
        active={active}
        title={'Login'}
        erro={'Todos os campos precisam ser preenchidos'}
        onPress={() => {
          handleSignIn();
        }}
      />
      <Image
        style={styles.image}
        source={require('../../assets/pana.png')}
        resizeMode="contain"
      />
    </View>
  );
};

export default LogIn;
