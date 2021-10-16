import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { colors } from '../../styles/colors';

import { styles } from './styles';

const ActionButton: React.FC<{
  style?: ViewStyle;
  active: boolean;
  title: string;
  erro?: string;
  onPress: () => void;
}> = props => {
  return (
    <View style={props.style}>
      {props.active ? (
        <TouchableOpacity
          style={[styles.box, { backgroundColor: colors.green }]}
          onPress={() => {
            props.onPress();
          }}>
          <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.box, { backgroundColor: colors.grayButton }]}
          onPress={() => {
            Alert.alert('Erro', props.erro);
          }}>
          <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ActionButton;
