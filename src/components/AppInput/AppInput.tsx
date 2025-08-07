import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import ClosedEye from '../../assets/icons/ClosedEye';
import OpenedEye from '../../assets/icons/OpenedEye';
import Colors from '../../theme/colors';
import styles from './AppInput.styles';

type AppInputProps = {
  typeOfInput?: 'password';
  label: string;
  theme?: 'dark';
} & TextInputProps;

const AppInput: React.FC<AppInputProps> = ({ typeOfInput, label, theme, ...rest }) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <View>
      <Text style={theme === 'dark' ? styles.textDark : styles.text}>{label}</Text>
      <TextInput
        {...rest}
        autoCapitalize="none"
        style={[styles.input, theme === 'dark' ? styles.inputColorDark : styles.inputColor]}
        secureTextEntry={typeOfInput === 'password' && isHidden ? true : false}
        placeholderTextColor={theme==='dark'? Colors.black : Colors.lightViolet}
      />
      {typeOfInput === 'password' && (
        <TouchableOpacity
          style={styles.isVisiblePassword}
          onPress={() => setIsHidden(prev => !prev)}
        >
          {isHidden ? <ClosedEye /> : <OpenedEye />}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AppInput;
