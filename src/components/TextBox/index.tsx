import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

const TextBox: React.FC<{
  title: string,
  value: string,
}> = (props) => {
  return (
    <View style={styles.border}>
      <Text style={styles.textTitle}>{`${props.title}: `}</Text>
      <Text style={styles.textValue}>{`${props.value}`}</Text>
    </View>
  );
}

export default TextBox;