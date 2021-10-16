import React from 'react';
import { Text, TextInput, View, ViewStyle } from 'react-native';

import { styles } from './styles';

const InputDefault: React.FC<{
  style?: ViewStyle;
  title: string;
  width?: number;
  value?: string;
  onChange: (text: string) => void;
}> = props => {
  return (
    <View style={[props.style, styles.border, { width: props.width }]}>
      <Text style={styles.text}>{props.title}</Text>
      <TextInput
        style={styles.input}
        value={props.value}
        onChangeText={props.onChange}
      />
    </View>
  );
};

export default InputDefault;
