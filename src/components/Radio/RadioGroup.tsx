import React, { useState } from 'react';
import { View } from 'react-native';
import _ from 'lodash';

import { RadioButton, RadioButtonProps, RadioGroupProps } from './index';

export default function RadioGroup({ style, layout = 'column', onPress, radioButtons }: RadioGroupProps) {

  const [radioButtonsLocal, setRadioButtonsLocal] = useState<RadioButtonProps[]>(radioButtons);

  if (!_.isEqual(radioButtons, radioButtonsLocal)) {
    setRadioButtonsLocal(radioButtons);
  }

  function handlePress(id: string) {
    for (const button of radioButtonsLocal) {
      if (button.selected && button.id === id) return;
      button.selected = button.id === id;
    }
    setRadioButtonsLocal([...radioButtonsLocal]);
    if (onPress) {
      onPress(radioButtonsLocal);
    }
  }

  return (
    <View style={style}>
      <View style={{ flexDirection: layout }}>
        {radioButtonsLocal.map((button) => (
          <RadioButton
            {...button}
            key={button.id}
            onPress={handlePress}
          />
        ))}
      </View>
    </View>
  )
}
