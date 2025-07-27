import { Text } from 'react-native';
import styles from './TextError.styles';

type ITextError = {
  error: string;
};

const TextError: React.FC<ITextError> = ({ error }) => {
  return <Text style={styles.textError}>{error}</Text>;
};

export default TextError;
