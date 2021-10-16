import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';
import { colors } from '../../styles/colors';

import { styles } from './styles';

const OperationBox: React.FC<{
  style: ViewStyle,
  type: string,
  onPress: ((arg0: string) => void),
  active: boolean
}> = ({ active = false, ...props }) => {
  const [color, setColor] = useState('');

  useEffect(() => {
    changeColor(active)
  });

  const changeColor = (active: boolean) => {
    if (active == true) {
      setColor(colors.green);
    } else {
      setColor(colors.grayButton);
    }
  }

  return (
    <TouchableOpacity style={[styles.box, props.style, { backgroundColor: color }]}
      onPress={() => {
        changeColor(!active);
        props.onPress(props.type);
      }}>
      <Text style={styles.text}>{props.type}</Text>
    </TouchableOpacity>
  );
}

export default OperationBox;