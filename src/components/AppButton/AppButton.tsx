import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import ActiveIndicator from '../ActiveIndicator/ActiveIndicator';
import styles from './AppButton.style';

type AppButtonProps = {
  title: String;
  isLoading?: boolean;
} & TouchableOpacityProps;

const AppButton: React.FC<AppButtonProps> = ({ title, isLoading, ...rest }) => {
  return (
    <TouchableOpacity {...rest} style={styles.button}>
      {isLoading ? (
        <ActiveIndicator />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;
